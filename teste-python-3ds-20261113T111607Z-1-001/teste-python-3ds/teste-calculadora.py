# teste-calculadora.py
import unittest
from calculadora import soma, subtrai, multiplica, divide

class TestCalculadora(unittest.TestCase):

    def test_soma(self):
        self.assertEqual(soma(1, 2), 3, "Erro: 1 + 2 deveria ser 3")
        print("Teste de soma (1 + 2 = 3): OK")
        
        self.assertEqual(soma(-1, 1), 0, "Erro: -1 + 1 deveria ser 0")
        print("Teste de soma (-1 + 1 = 0): OK")
        
        self.assertEqual(soma(-1, -1), -2, "Erro: -1 + (-1) deveria ser -2")
        print("Teste de soma (-1 + -1 = -2): OK")

    def test_subtrai(self):
        self.assertEqual(subtrai(10, 5), 5, "Erro: 10 - 5 deveria ser 5")
        print("Teste de subtração (10 - 5 = 5): OK")
        
        self.assertEqual(subtrai(-1, -1), 0, "Erro: -1 - (-1) deveria ser 0")
        print("Teste de subtração (-1 - (-1) = 0): OK")
        
        self.assertEqual(subtrai(0, 1), -1, "Erro: 0 - 1 deveria ser -1")
        print("Teste de subtração (0 - 1 = -1): OK")

    def test_multiplica(self):
        self.assertEqual(multiplica(3, 7), 21, "Erro: 3 * 7 deveria ser 21")
        print("Teste de multiplicação (3 * 7 = 21): OK")
        
        self.assertEqual(multiplica(-1, 1), -1, "Erro: -1 * 1 deveria ser -1")
        print("Teste de multiplicação (-1 * 1 = -1): OK")
        
        self.assertEqual(multiplica(0, 10), 0, "Erro: 0 * 10 deveria ser 0")
        print("Teste de multiplicação (0 * 10 = 0): OK")

    def test_divide(self):
        self.assertEqual(divide(10, 2), 5, "Erro: 10 / 2 deveria ser 5")
        print("Teste de divisão (10 / 2 = 5): OK")
        
        self.assertEqual(divide(-10, 2), -5, "Erro: -10 / 2 deveria ser -5")
        print("Teste de divisão (-10 / 2 = -5): OK")
        
        with self.assertRaises(ValueError, msg="Erro: divisão por zero deveria gerar ValueError"):
            divide(10, 0)
        print("Teste de divisão por zero (ValueError): OK")

if __name__ == '__main__':
    print("=== INICIANDO TESTES DA CALCULADORA ===\n")
    unittest.main(verbosity=2)
