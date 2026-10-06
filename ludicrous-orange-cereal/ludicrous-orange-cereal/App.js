import React, { useState } from 'react';
import { 
  Text, 
  View, 
  Button, 
  StyleSheet, 
  Modal, 
  TouchableOpacity, 
  TextInput, 
  ScrollView, 
  Alert 
} from 'react-native';

export default function App() {
  // --- ESTADOS ---
  // Estado para controlar a exibição dos Modais
  const [verReceitaVisivel, setVerReceitaVisivel] = useState(false);
  const [cadastroVisivel, setCadastroVisivel] = useState(false);

  // Estado para armazenar a receita selecionada que será exibida no modal de detalhes
  const [receitaSelecionada, setReceitaSelecionada] = useState(null);

  // Estados para o formulário de cadastro de nova receita
  const [nome, setNome] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [preparo, setPreparo] = useState('');

  // Estado que armazena a lista de receitas (iniciando com uma de exemplo)
  const [receitas, setReceitas] = useState([
    {
      id: '1',
      nome: "Bolo de Caneca Rápido",
      ingredientes: "• 4 colheres (sopa) de farinha de trigo\n• 4 colheres (sopa) de açúcar\n• 2 colheres (sopa) de chocolate em pó\n• 1 ovo\n• 3 colheres (sopa) de leite\n• 3 colheres (sopa) de óleo",
      preparo: "Misture todos os ingredientes secos na caneca. Adicione o ovo, o óleo e o leite, mexendo bem até ficar homogêneo. Leve ao micro-ondas em potência máxima por 3 minutos."
    }
  ]);

  // --- FUNÇÕES ---
  // Função para abrir os detalhes de uma receita específica
  const abrirDetalhesReceita = (receita) => {
    setReceitaSelecionada(receita);
    setVerReceitaVisivel(true);
  };

  // Limpa os campos do formulário de cadastro
  const limparCampos = () => {
    setNome('');
    setIngredientes('');
    setPreparo('');
  };

  // Função para salvar a nova receita
  const lidarComSalvar = () => {
    // Validação dos campos
    if (!nome.trim() || !ingredientes.trim() || !preparo.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos antes de salvar!');
      return;
    }

    // Criando o novo objeto de receita
    const novaReceita = {
      id: Math.random().toString(), // Gera um ID único simples
      nome: nome.trim(),
      ingredientes: ingredientes.trim(),
      preparo: preparo.trim(),
    };

    // Adicionando à lista existente
    setReceitas([...receitas, novaReceita]);
    
    // Feedback de sucesso, limpeza e fechamento do modal
    Alert.alert('Sucesso', 'Receita cadastrada com sucesso!');
    limparCampos();
    setCadastroVisivel(false);
  };

  // Função para cancelar o cadastro
  const lidarComCancelar = () => {
    limparCampos();
    setCadastroVisivel(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📱 App de Receitas</Text>
      <Text style={styles.subtitle}>Colecione suas receitas preferidas</Text>
      
      {/* ScrollView para listar dinamicamente todos os cartões de receitas cadastradas */}
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        {receitas.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardTitle}>🍰 {item.nome}</Text>
            <Button 
              title="Ver Receita" 
              color="#e67e22"
              onPress={() => abrirDetalhesReceita(item)} 
            />
          </View>
        ))}
      </ScrollView>

      {/* MODAL 1: Visualização de Detalhes da Receita */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={verReceitaVisivel}
        onRequestClose={() => setVerReceitaVisivel(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {receitaSelecionada && (
              <>
                <Text style={styles.receitaTitle}>🍰 {receitaSelecionada.nome}</Text>
                
                <Text style={styles.sectionTitle}>Ingredientes:</Text>
                <Text style={styles.textBody}>{receitaSelecionada.ingredientes}</Text>

                <Text style={styles.sectionTitle}>Modo de Preparo:</Text>
                <Text style={styles.textBody}>{receitaSelecionada.preparo}</Text>
              </>
            )}

            <View style={styles.buttonSpacing}>
              <Button 
                title="Fechar" 
                color="#ff5c5c"
                onPress={() => setVerReceitaVisivel(false)} 
              />
            </View>
          </View>
        </View>
      </Modal>

      {/* MODAL 2: Cadastro de Nova Receita */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={cadastroVisivel}
        onRequestClose={lidarComCancelar}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.receitaTitle}>📝 Nova Receita</Text>

            {/* Inputs de Texto Estilizados */}
            <Text style={styles.inputLabel}>Nome da Receita:</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex: Torta de Limão"
              value={nome}
              onChangeText={setNome}
            />

            <Text style={styles.inputLabel}>Ingredientes:</Text>
            <TextInput
              style={[styles.input, styles.inputMultiline]}
              placeholder="Ex: • 1 lata de leite condensado..."
              multiline={true}
              numberOfLines={4}
              value={ingredientes}
              onChangeText={setIngredientes}
            />

            <Text style={styles.inputLabel}>Modo de Preparo:</Text>
            <TextInput
              style={[styles.input, styles.inputMultiline]}
              placeholder="Ex: Bata tudo no liquidificador..."
              multiline={true}
              numberOfLines={4}
              value={preparo}
              onChangeText={setPreparo}
            />

            {/* Botões de Ação do Formulário */}
            <View style={styles.formButtonsContainer}>
              <View style={styles.formButtonWrapper}>
                <Button title="Cancelar" color="#ff5c5c" onPress={lidarComCancelar} />
              </View>
              <View style={styles.formButtonWrapper}>
                <Button title="Salvar" color="#2ecc71" onPress={lidarComSalvar} />
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* Botão Flutuante (FAB) que agora aciona o Modal de Cadastro */}
      <TouchableOpacity 
        style={styles.fab} 
        onPress={() => setCadastroVisivel(true)}
      >
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666'
  },
  // Estilos da Lista e Cartões
  scrollContainer: {
    flex: 1,
    width: '100%',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100, // Espaço para não cobrir cartões atrás do FAB
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333'
  },
  // Estilos dos Modais
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    width: '90%',
    maxHeight: '85%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  receitaTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#333'
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
    color: '#e67e22'
  },
  textBody: {
    fontSize: 15,
    lineHeight: 22,
    color: '#444'
  },
  buttonSpacing: {
    marginTop: 25
  },
  // Estilos do Formulário
  inputLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 10,
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 15,
    backgroundColor: '#fafafa',
  },
  inputMultiline: {
    textAlignVertical: 'top', // Garante que o texto comece no topo no Android
    minHeight: 80,
  },
  formButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  formButtonWrapper: {
    width: '45%',
  },
  // Estilos do FAB
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e67e22',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3
  },
  fabText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    lineHeight: 30
  }
});
