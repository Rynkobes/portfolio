import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Portfolio from "./containers/Portfolio"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Routes>
        <Route path='/' element={<Portfolio />} />
      </Routes>
    </Router>
  </ChakraProvider>
)
