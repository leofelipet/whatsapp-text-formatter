# WhatsApp Text Formatter 📱

Um formatador de texto visual para WhatsApp que permite visualizar como suas mensagens ficam formatadas antes de enviar. Interface intuitiva com preview em tempo real no estilo do WhatsApp.

![Preview do WhatsApp Text Formatter](https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

## 🚀 Funcionalidades

- ✅ **Preview em tempo real** - Veja como sua mensagem ficará no WhatsApp
- ✅ **Interface responsiva** - Funciona em desktop e mobile
- ✅ **Mockup realista** - Simulação visual do WhatsApp
- ✅ **Cópia com um clique** - Copie o texto formatado instantaneamente
- ✅ **Suporte completo** - Todas as formatações do WhatsApp
- ✅ **Atalhos de teclado** - Formate rapidamente com shortcuts

## 🎯 Formatações Suportadas

| Formatação | Sintaxe | Exemplo |
|------------|---------|---------|
| **Negrito** | `*texto*` | *Este texto ficará em negrito* |
| _Itálico_ | `_texto_` | _Este texto ficará em itálico_ |
| ~~Tachado~~ | `~texto~` | ~Este texto ficará tachado~ |
| `Monoespaçado` | `` ```texto``` `` | ```Este texto ficará monoespaçado``` |
| `Código inline` | `` `texto` `` | `código inline` |
| > Citação | `> texto` | > Esta é uma citação |
| Lista marcadores | `* item` | • Item da lista |
| Lista numerada | `1. item` | 1. Item numerado |

## 🖥️ Como Usar

1. **Digite seu texto** no editor à esquerda
2. **Visualize** como ficará no WhatsApp no preview à direita
3. **Clique em "Copiar Texto"** para copiar o texto formatado
4. **Cole no WhatsApp** e envie sua mensagem!

### Atalhos de Teclado

- `Ctrl + B` - Negrito
- `Ctrl + I` - Itálico  
- `Ctrl + U` - Tachado
- `Ctrl + K` - Código inline

## 🛠️ Instalação

### Opção 1: Download Direto
```bash
# Clone o repositório
git clone https://github.com/leofelipet/whatsapp-text-formatter.git

# Entre na pasta
cd whatsapp-text-formatter

# Abra o arquivo index.html no navegador
```

### Opção 2: Usar Online
Acesse diretamente pelo GitHub Pages: [Aqui](https://leofelipet.github.io/whatsapp-text-formatter/)

## 📁 Estrutura do Projeto

```
whatsapp-text-formatter/
├── index.html          # Página principal
├── styles.css          # Estilos e design
├── script.js           # Lógica da aplicação
└── README.md          # Documentação
```

## 🎨 Tecnologias Utilizadas

- **HTML5** - Estrutura da página
- **CSS3** - Estilização e layout responsivo
- **JavaScript ES6** - Lógica de formatação e interatividade
- **Flexbox/Grid** - Layout moderno e responsivo

## 🔧 Funcionalidades Técnicas

### Formatação de Texto
- Regex para identificar padrões de formatação
- Conversão de sintaxe WhatsApp para HTML
- Preservação de quebras de linha como `\n`

### Interface Visual
- Mockup realista do WhatsApp com cores autênticas
- Animações suaves e feedback visual
- Design responsivo para diferentes tamanhos de tela

### Usabilidade
- Cópia para área de transferência com fallback
- Notificações toast para feedback do usuário
- Atalhos de teclado para formatação rápida

## 🌟 Exemplos de Uso

### Texto Simples
```
Olá! Como você está?
```

### Texto Formatado
```
*Olá!* Como você está?
_Espero que bem!_

> Lembrete importante

Lista de tarefas:
* Fazer compras
* Estudar programação
* Enviar relatório
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📱 Compatibilidade

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Mobile (iOS/Android)

## 🐛 Problemas Conhecidos

- Algumas formatações muito complexas podem não aparecer perfeitamente no preview
- Em navegadores muito antigos, a função de cópia pode não funcionar

## 📝 Roadmap

- [ ] Suporte a botões de formatação
- [ ] Tema escuro
- [ ] Histórico de mensagens
- [ ] Suporte a emojis direto no editor

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Leo Felipe**
- GitHub: [@leofelipet](https://github.com/leofelipet)

## 🙏 Agradecimentos

- Inspirado na necessidade de visualizar formatação do WhatsApp
- Design baseado na interface oficial do WhatsApp
- Comunidade open source pelas ferramentas utilizadas

---

⭐ Se este projeto te ajudou, deixe uma estrela no GitHub!

📢 Compartilhe com seus amigos que também usam WhatsApp!