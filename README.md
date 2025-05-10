# Checkpoint_01_Front-End

## Descrição

O caso da Vinharia Agnello não é único, porém possui muitos aprendizados.
Tendo décadas no mercado, a Vinharia Agnello decidiu de vez entrar no e-commerce,
pedindo ajuda a FIAP e seus alunos para facilitarem a resolução de seus problemas.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap
- Font Awesome
- Google Fonts

## Estruturação das Páginas

##### `(Imagens em dark mode do navegador)`

### Página Inicial

#### Página inicial da Vinharia Agnello, apresentando o banner principal e menu de navegação.

![](src/assets/imgs/readme1.png)

### Catálogo de Vinhos

#### Página de catálogo com detalhes sobre os vinhos disponíveis, incluindo descrições e características.

![](src/assets/imgs/readme2.png)

### Galeria de Vinhos

#### Galeria visual dos vinhos selecionados, com imagens e informações destacadas.

![](src/assets/imgs/readme3.png)

### Sobre a Vinharia

#### Página institucional contando a história e tradição da Vinharia Agnello.

![](src/assets/imgs/readme4.png)

### Contato

#### Formulário de contato e informações para comunicação com a Vinharia Agnello.

![](src/assets/imgs/readme5.png)

### Nome dos integrantes:

- Caio Nascimento Caminha
- Gabriel Alexandre Fukushima Sakura
- Gusthavo Costa de Melo
- Lucas Oliveira de Mendonça Almeida
- Victor Antonio Teixeira da Silva

### Github Pages - https://antoine-vitrian.github.io/Checkpoint_01_Front-End/

### Efeitos Visuais

#### Pseudo-classes

- **`:hover`**: Utilizada em links do menu de navegação para alterar o tamanho da fonte e adicionar uma borda inferior ao passar o mouse. (Arquivo: `efeitos.css`)
- **`:active`**: Aplicada às imagens laterais na página de vinhos para criar efeitos de transformação, como `skew` e `rotate`, ao clicar nelas. (Arquivo: `efeitos.css`)
- **`:checked`**: Usada em checkboxes na tabela de vinhos para aumentar o tamanho (`scale`) e alterar a cor de fundo quando marcadas. (Arquivo: `efeitos.css`)

#### Pseudo-elementos

- **`::first-line`**: Aplicado ao primeiro parágrafo da página inicial para alterar a cor da primeira linha do texto. (Arquivo: `efeitos.css`)
- **`::after`**: Adicionado ao título principal da página inicial para incluir emojis decorativos após o texto. (Arquivo: `efeitos.css`)

#### Animações

- **`@keyframes mover`**: Criada para animar imagens na página inicial, movendo-as horizontalmente em um loop infinito. (Arquivo: `home.css`)
- **Transições**: Aplicadas em diversos elementos, como links do menu, checkboxes e imagens, para suavizar mudanças de estilo, como transformações e alterações de cor. (Arquivos: `efeitos.css`, `vinhos.css`, `home.css`)
