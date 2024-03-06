import { render, screen } from "@testing-library/react";
import { Navbar } from "../Navbar";

describe("Navbar", () => {
  it('renderizando corretamente', () => {
      render(<Navbar/>)

      expect(screen.getByText("Dashboard")).toBeInTheDocument();
      expect(screen.getByText("Projetos Iniciados")).toBeInTheDocument();
      expect(screen.getByText("Projetos Finalizados")).toBeInTheDocument();
      expect(screen.getByText("Clientes")).toBeInTheDocument();
      expect(screen.getByText("Fornecedores")).toBeInTheDocument();
  });
  
})