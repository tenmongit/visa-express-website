import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      50: "#e6f0ff",
      100: "#cce0ff",
      200: "#99c2ff",
      300: "#66a3ff",
      400: "#3385ff",
      500: "#0066ff", // main blue, like on kaztour.kz
      600: "#0052cc",
      700: "#003d99",
      800: "#002966",
      900: "#001433",
    },
    accent: {
      500: "#ff9900", // orange accent
    },
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "white",
        color: "gray.800",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "500",
        borderRadius: "md",
      },
      variants: {
        solid: (props: any) => ({
          bg: props.colorScheme === "brand" ? "brand.500" : undefined,
          color: "white",
          _hover: {
            bg: props.colorScheme === "brand" ? "brand.600" : undefined,
            transform: "translateY(-2px)",
            boxShadow: "md",
          },
          transition: "all 0.2s ease",
        }),
      },
    },
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: "none",
          color: "brand.500",
        },
        transition: "all 0.2s ease",
      },
    },
  },
});

export default theme;
