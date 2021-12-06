import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import Portfolio from "./containers/Portfolio"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Portfolio />
  </ChakraProvider>
)
