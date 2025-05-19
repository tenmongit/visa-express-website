import { useEffect, useState } from 'react';
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Spinner, Tag, Button, Flex, Text, Input, Select, HStack, useToast } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

function filterApplications(applications: any[], filters: any) {
  return applications.filter(app => {
    return (
      (!filters.name || app.name?.toLowerCase().includes(filters.name.toLowerCase())) &&
      (!filters.phone || app.phone?.includes(filters.phone)) &&
      (!filters.country || (app.country || '').toLowerCase().includes(filters.country.toLowerCase())) &&
      (!filters.status || app.status === filters.status)
    );
  });
}

export default function AdminPage() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({ name: '', phone: '', country: '', status: '' });
  const [exporting, setExporting] = useState(false);
  const toast = useToast();
  const router = useRouter();

  // Simple authentication check (replace with real auth in production)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isLoggedIn = localStorage.getItem('admin_logged_in');
      if (!isLoggedIn) {
        router.replace('/login');
      }
    }
  }, [router]);

  const fetchApplications = () => {
    setLoading(true);
    fetch('http://localhost:5000/api/applications')
      .then(res => res.json())
      .then(data => {
        if (!Array.isArray(data)) {
          setError(data?.error || 'Ошибка загрузки заявок. Проверьте авторизацию.');
          setApplications([]);
        } else {
          setApplications(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Ошибка загрузки заявок');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleStatusChange = (id: number, newStatus: string) => {
    fetch(`http://localhost:5000/api/applications/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus })
    })
      .then(res => res.json())
      .then(() => {
        toast({ title: 'Status updated', status: 'success', duration: 2000 });
        fetchApplications();
      })
      .catch(() => toast({ title: 'Failed to update status', status: 'error' }));
  };

  const handleExport = () => {
    setExporting(true);
    fetch('http://localhost:5000/api/export', { method: 'GET' })
      .then(res => res.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'applications.xlsx';
        document.body.appendChild(a);
        a.click();
        a.remove();
        setExporting(false);
      })
      .catch(() => {
        toast({ title: 'Export failed', status: 'error' });
        setExporting(false);
      });
  };

  const filtered = filterApplications(applications, filters);

  return (
    <Box minH="100vh" bg="gray.50">
      <Header />
      <Box maxW="7xl" mx="auto" py={10} px={4}>
        <Flex justify="space-between" align="center" mb={6}>
          <Heading size="lg">Admin Panel — Applications</Heading>
          <Button onClick={handleExport} colorScheme="blue" isLoading={exporting}>Download Excel</Button>
        </Flex>
        <Box mb={4}>
          <HStack spacing={4}>
            <Input placeholder="Search by name" value={filters.name} onChange={e => setFilters(f => ({ ...f, name: e.target.value }))} maxW="200px" />
            <Input placeholder="Phone" value={filters.phone} onChange={e => setFilters(f => ({ ...f, phone: e.target.value }))} maxW="150px" />
            <Input placeholder="Country" value={filters.country} onChange={e => setFilters(f => ({ ...f, country: e.target.value }))} maxW="150px" />
            <Select placeholder="Status" value={filters.status} onChange={e => setFilters(f => ({ ...f, status: e.target.value }))} maxW="150px">
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="denied">Denied</option>
            </Select>
          </HStack>
        </Box>
        {loading ? (
          <Flex justify="center" align="center" minH="200px"><Spinner size="xl" /></Flex>
        ) : error ? (
          <Text color="red.500">{error}</Text>
        ) : (
          <Box overflowX="auto" bg="white" borderRadius="md" boxShadow="md" p={4}>
            <Table size="sm" variant="simple">
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Name</Th>
                  <Th>Phone</Th>
                  <Th>Email</Th>
                  <Th>Country</Th>
                  <Th>Date From</Th>
                  <Th>Date To</Th>
                  <Th>Adults</Th>
                  <Th>Children</Th>
                  <Th>Accommodation</Th>
                  <Th>Comment</Th>
                  <Th>Status</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filtered.map((a: any) => (
                  <Tr key={a.id}>
                    <Td>{a.id}</Td>
                    <Td>{a.name}</Td>
                    <Td>{a.phone}</Td>
                    <Td>{a.email}</Td>
                    <Td>{a.country}</Td>
                    <Td>{a.date_from}</Td>
                    <Td>{a.date_to}</Td>
                    <Td>{a.adults}</Td>
                    <Td>{a.children}</Td>
                    <Td>{a.accommodation}</Td>
                    <Td>{a.comment}</Td>
                    <Td><Tag colorScheme={
                      a.status === 'pending' ? 'yellow' : a.status === 'approved' ? 'green' : 'red'
                    }>{a.status}</Tag></Td>
                    <Td>
                      <HStack>
                        <Button size="xs" colorScheme="green" variant="outline" onClick={() => handleStatusChange(a.id, 'approved')} isDisabled={a.status === 'approved'}>Approve</Button>
                        <Button size="xs" colorScheme="red" variant="outline" onClick={() => handleStatusChange(a.id, 'denied')} isDisabled={a.status === 'denied'}>Deny</Button>
                      </HStack>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        )}
      </Box>
      <Footer />
    </Box>
  );
}
