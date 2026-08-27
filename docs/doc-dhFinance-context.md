# DH\|Finance --- Documento de Contexto do Projeto

> **Documento de contexto para desenvolvimento assistido por IA**
>
> Este arquivo deve ser usado como fonte principal de contexto para
> qualquer IA que participe do planejamento, design, desenvolvimento,
> revisão ou evolução do DH\|Finance.

------------------------------------------------------------------------

## 1. Identidade do Projeto

**Nome:** DH\|Finance\
**Tipo:** Aplicação web de gestão financeira pessoal\
**Categoria:** Personal Finance / Fintech SaaS\
**Idioma inicial:** Português (Brasil)\
**Moeda inicial:** BRL (R\$)\
**Plataforma:** Web responsiva\
**Objetivo central:** ajudar pessoas a entender, organizar e controlar
melhor o próprio dinheiro.

### 1.1 Visão do produto

O DH\|Finance deve funcionar como um centro de controle financeiro
pessoal.

A proposta não é apenas registrar gastos. O sistema deve transformar
lançamentos financeiros em informações fáceis de entender, permitindo
que o usuário responda rapidamente:

-   Quanto dinheiro tenho agora?
-   Quanto entrou neste mês?
-   Quanto já gastei?
-   Quanto ainda posso gastar?
-   Quais são minhas maiores despesas?
-   Quanto tenho comprometido com contas recorrentes?
-   Quanto já consegui economizar?
-   Quanto falta para atingir minhas metas?
-   Onde estou gastando mais?
-   O que está próximo de vencer?
-   Como está minha evolução financeira ao longo do tempo?

A experiência deve priorizar **clareza, simplicidade, percepção de
controle e tomada de decisão**.

------------------------------------------------------------------------

# 2. Problema que o produto resolve

Muitas pessoas sabem quanto recebem, mas não sabem exatamente para onde
o dinheiro está indo.

O DH\|Finance deve reduzir essa falta de visibilidade oferecendo uma
visão centralizada das finanças pessoais.

### Principais problemas

1.  Falta de organização financeira.
2.  Dificuldade para acompanhar despesas.
3.  Falta de visão sobre quanto sobra do salário.
4.  Esquecimento de contas recorrentes.
5.  Dificuldade para controlar limites de gastos.
6.  Falta de acompanhamento de metas financeiras.
7.  Dificuldade para identificar categorias que consomem mais dinheiro.
8.  Falta de histórico financeiro organizado.
9.  Dificuldade para entender a evolução financeira ao longo do mês.
10. Falta de uma visão resumida que transforme muitos lançamentos em
    informações úteis.

------------------------------------------------------------------------

# 3. Público-alvo

## Público principal

Jovens e adultos que desejam organizar melhor suas finanças pessoais.

Especial atenção para usuários que:

-   possuem dificuldade para controlar gastos;
-   estão endividados ou com orçamento apertado;
-   recebem salário, mas não sabem quanto realmente sobra;
-   possuem diversas despesas recorrentes;
-   querem economizar;
-   possuem objetivos financeiros;
-   precisam visualizar seus gastos de maneira simples;
-   não possuem conhecimento avançado de finanças.

## Perfil comportamental

O usuário não deve precisar entender conceitos financeiros complexos
para utilizar o sistema.

O produto deve explicar informações financeiras por meio de:

-   números claros;
-   gráficos simples;
-   indicadores;
-   comparações;
-   mensagens contextuais;
-   estados positivos, neutros e de atenção;
-   linguagem natural.

### Princípio

> O usuário não deve precisar ser especialista em finanças para entender
> o próprio dinheiro.

------------------------------------------------------------------------

# 4. Objetivos do produto

## Objetivo principal

Ajudar o usuário a economizar dinheiro e ter maior controle sobre sua
vida financeira.

## Objetivos secundários

-   Aumentar a consciência sobre gastos.
-   Facilitar o registro de receitas e despesas.
-   Mostrar quanto dinheiro está disponível.
-   Ajudar no planejamento mensal.
-   Controlar despesas por categoria.
-   Controlar contas recorrentes.
-   Incentivar a criação de metas.
-   Mostrar progresso financeiro.
-   Facilitar a identificação de excessos de gastos.
-   Criar histórico financeiro para análise.

------------------------------------------------------------------------

# 5. Princípios do produto

Toda decisão de UX, UI, arquitetura ou funcionalidade deve respeitar
estes princípios.

### 5.1 Simplicidade

Não adicionar complexidade sem necessidade.

### 5.2 Clareza

Informações financeiras devem ser compreendidas rapidamente.

### 5.3 Controle

O usuário deve sentir que possui domínio sobre sua situação financeira.

### 5.4 Transparência

O sistema não deve esconder informações importantes atrás de interações
desnecessárias.

### 5.5 Consistência

Mesmos conceitos devem funcionar da mesma maneira em todo o sistema.

### 5.6 Segurança

Dados financeiros são privados e devem ser tratados como informações
sensíveis.

### 5.7 Ação

Sempre que possível, uma informação importante deve possuir uma ação
relacionada.

Exemplo:

> "R\$ 850 gastos em alimentação"

Pode possuir uma ação para:

> "Ver gastos"

------------------------------------------------------------------------

# 6. Escopo funcional

O MVP é dividido nos seguintes módulos:

1.  Autenticação
2.  Cadastro
3.  Overview / Dashboard
4.  Transações
5.  Orçamentos / Despesas
6.  Metas / Pots
7.  Contas recorrentes
8.  Navegação
9.  Configurações --- prevista para evolução do produto

------------------------------------------------------------------------

# 7. Autenticação

## 7.1 Login

O sistema deve permitir:

-   Login com e-mail e senha.
-   Login com Google.
-   Login com GitHub.
-   Validação dos campos.
-   Botão de acesso.
-   Feedback visual de erro.
-   Feedback visual de carregamento.
-   Recuperação de acesso --- recomendada para o produto.

## 7.2 Cadastro

Campos:

-   Nome.
-   E-mail.
-   Senha.
-   Confirmação de senha.

Funcionalidades:

-   Mostrar/ocultar senha.
-   Validação dos campos.
-   Validação de confirmação de senha.
-   Botão de cadastro.
-   Feedback de erro.
-   Feedback de sucesso.
-   Estado de carregamento.

## 7.3 Regras

Cada usuário deve possuir seus próprios dados financeiros.

Um usuário nunca pode visualizar ou alterar dados pertencentes a outro
usuário.

Toda operação autenticada deve estar associada ao usuário responsável.

------------------------------------------------------------------------

# 8. Overview / Dashboard

O Overview é a principal tela do produto.

Sua função é transformar os dados registrados nos demais módulos em uma
visão resumida e acionável.

## 8.1 Indicadores principais

Exibir:

-   Saldo atual.
-   Total economizado.
-   Renda.
-   Total de despesas.

## 8.2 Resumo das transações

Exibir:

-   Resumo das transações.
-   Transações recentes.
-   Tipo da movimentação.
-   Valor.
-   Data.
-   Categoria quando aplicável.

Ações:

-   Ver todas as transações.

## 8.3 Resumo das metas

Exibir:

-   Metas cadastradas.
-   Nome da meta.
-   Valor acumulado.
-   Valor total.
-   Progresso percentual.

Ações:

-   Ver detalhes da meta.

## 8.4 Resumo dos orçamentos

Exibir:

-   Categorias.
-   Limite definido.
-   Valor gasto.
-   Valor disponível.
-   Percentual utilizado.

Ações:

-   Ver detalhes dos gastos.

## 8.5 Resumo das contas recorrentes

Exibir:

-   Total de contas recorrentes.
-   Valor total.
-   Contas pagas.
-   Contas a vencer.
-   Próximos vencimentos.

Ações:

-   Ver detalhes das contas.

## 8.6 Comportamento esperado

O dashboard deve priorizar o que exige atenção.

Exemplo de hierarquia:

1.  Saldo atual.
2.  Entradas e despesas.
3.  Situação do orçamento.
4.  Próximas contas.
5.  Progresso das metas.
6.  Histórico e detalhes.

------------------------------------------------------------------------

# 9. Modelo conceitual de saldo

O sistema precisa diferenciar **movimentação financeira** de
**organização interna do dinheiro**.

Uma transferência entre contas próprias não deve ser tratada como
receita ou despesa.

### Exemplo

Conta principal:

> R\$ 3.000

Transferência para uma meta:

> R\$ 500

Saldo da conta:

> R\$ 2.500

Saldo da meta:

> R\$ 500

Patrimônio financeiro total:

> R\$ 3.000

Essa transferência deve aparecer no histórico como movimentação, mas não
deve aumentar artificialmente a receita ou a despesa.

------------------------------------------------------------------------

# 10. Transações

As transações são o núcleo operacional do sistema.

## 10.1 Tipos

O sistema deve suportar:

-   Despesa.
-   Receita.
-   Transferência.

## 10.2 Nova transação

Campos básicos:

-   Nome da transação.
-   Valor.
-   Categoria.
-   Data.
-   Tipo.

## 10.3 Recorrência

Opções:

-   Não se repete.
-   Recorrente.

Quando recorrente:

-   Frequência mensal.
-   Frequência semanal.
-   Frequência anual.
-   Próximo vencimento.

A recorrência deve ser tratada como uma regra de geração/planejamento, e
não simplesmente como vários lançamentos duplicados sem relação entre
si.

## 10.4 Transferências

Para uma transferência:

-   Selecionar origem.
-   Selecionar destino.
-   Permitir destino em uma meta.

Exemplos:

-   Conta principal → Reserva.
-   Conta principal → Meta de viagem.
-   Meta → Conta principal.
-   Conta A → Conta B.

## 10.5 Metas como movimentação

Adicionar dinheiro à meta deve ser registrado como transferência.

Retirar dinheiro da meta também deve ser registrado como transferência.

Isso evita que o sistema interprete uma movimentação interna como:

-   nova receita;
-   nova despesa.

## 10.6 Listagem

A listagem deve permitir:

-   Pesquisar.
-   Filtrar por categoria.
-   Ordenar.
-   Paginar.
-   Identificar visualmente o tipo.

Cada item deve apresentar, quando aplicável:

-   Nome.
-   Remetente/destinatário.
-   Categoria.
-   Data.
-   Valor.
-   Tipo.

## 10.7 Identidade visual

Receitas, despesas e transferências devem possuir diferenciação visual
clara.

Essa diferenciação não deve depender exclusivamente de cor. Ícones,
textos e outros elementos devem contribuir para acessibilidade.

------------------------------------------------------------------------

# 11. Orçamentos / Despesas

O módulo de Budget representa o planejamento de quanto o usuário
pretende gastar por categoria.

## 11.1 Criação

Campos:

-   Nome da categoria.
-   Limite máximo.
-   Cor.

## 11.2 Card da categoria

Cada card deve apresentar:

-   Nome.
-   Valor máximo.
-   Valor gasto.
-   Valor disponível.
-   Percentual utilizado.
-   Indicador visual de progresso.

## 11.3 Exemplo

Categoria:

> Alimentação

Limite:

> R\$ 800

Gasto:

> R\$ 520

Disponível:

> R\$ 280

Uso:

> 65%

## 11.4 Histórico

Exibir:

-   Nome.
-   Valor.
-   Data.

Permitir:

-   Ver todos os gastos.
-   Filtrar transações pela categoria.

## 11.5 Edição

Permitir:

-   Alterar nome.
-   Alterar limite.
-   Alterar cor.

## 11.6 Exclusão

A exclusão deve exigir confirmação.

### Regra importante

Excluir um orçamento/categoria **não deve excluir automaticamente as
transações históricas** associadas a ela.

A IA deve preservar a integridade histórica dos dados.

------------------------------------------------------------------------

# 12. Categorias

Categorias são utilizadas para organizar as transações e alimentar os
orçamentos.

Exemplos iniciais:

-   Alimentação.
-   Transporte.
-   Moradia.
-   Saúde.
-   Educação.
-   Lazer.
-   Compras.
-   Assinaturas.
-   Outros.

Essas categorias devem ser extensíveis.

O usuário poderá futuramente criar categorias personalizadas.

Cada categoria pode possuir:

-   Nome.
-   Cor.
-   Ícone --- recomendado para evolução.
-   Status.

------------------------------------------------------------------------

# 13. Metas / Pots

As metas representam valores que o usuário deseja acumular para um
objetivo específico.

Exemplos:

-   Comprar um carro.
-   Fazer uma viagem.
-   Reserva de emergência.
-   Comprar computador.
-   Comprar uma casa.

## 13.1 Criação

Campos:

-   Nome.
-   Valor da meta.
-   Cor.

## 13.2 Card

Exibir:

-   Nome.
-   Valor acumulado.
-   Valor total.
-   Percentual alcançado.
-   Barra/progresso visual.

## 13.3 Edição

Permitir:

-   Alterar nome.
-   Alterar valor.
-   Alterar cor.

## 13.4 Adicionar dinheiro

O usuário deve:

1.  Informar valor.
2.  Visualizar percentual atual.
3.  Visualizar novo percentual.
4.  Visualizar novo valor acumulado.
5.  Confirmar.

A movimentação deve ser registrada como transferência.

## 13.5 Retirar dinheiro

O usuário deve:

1.  Informar valor.
2.  Visualizar percentual atual.
3.  Visualizar novo percentual.
4.  Visualizar saldo restante.
5.  Confirmar.

A retirada deve ser registrada como transferência.

## 13.6 Integridade

O valor acumulado da meta deve ser consequência das movimentações
realizadas.

Evitar permitir inconsistências entre:

-   saldo da meta;
-   histórico de transferências;
-   transações.

------------------------------------------------------------------------

# 14. Contas recorrentes

Este módulo representa compromissos financeiros recorrentes.

Exemplos:

-   Aluguel.
-   Internet.
-   Energia.
-   Água.
-   Streaming.
-   Plano de celular.
-   Academia.
-   Financiamento.

## 14.1 Informações

Cada conta deve possuir:

-   Nome.
-   Valor.
-   Frequência.
-   Próximo vencimento.
-   Status.

## 14.2 Dashboard do módulo

Exibir:

-   Total de contas recorrentes.
-   Valor total.
-   Contas pagas.
-   Contas a vencer.
-   Próximos vencimentos.

## 14.3 Busca e ordenação

Permitir:

-   Pesquisar.
-   Ordenar por data.
-   Ordenar por proximidade do vencimento --- recomendado.

## 14.4 Status

Estados mínimos:

-   A vencer.
-   Paga.

Futuramente:

-   Atrasada.
-   Cancelada.

## 14.5 Marcar como paga

Quando o usuário marcar uma conta como paga:

1.  Atualizar o status.
2.  Registrar a despesa nas transações.
3.  Associar a transação à conta recorrente.
4.  Preparar o próximo vencimento quando aplicável.

### Regra crítica

Não permitir que um mesmo pagamento seja registrado duas vezes por ações
repetidas do usuário.

A operação deve ser idempotente.

------------------------------------------------------------------------

# 15. Navegação

A navegação principal deve conter:

-   Overview / Home.
-   Transactions / Transações.
-   Despesas / Budget.
-   Pots / Metas.
-   Recurring Bills / Contas recorrentes.

Também deve existir:

-   Menu minimizado.
-   Navegação responsiva.
-   Estado ativo da página.
-   Identificação clara da seção atual.

------------------------------------------------------------------------

# 16. Arquitetura de informação

Estrutura conceitual:

``` text
DH|Finance
│
├── Autenticação
│   ├── Login
│   └── Cadastro
│
└── Aplicação
    ├── Overview
    ├── Transações
    ├── Despesas
    ├── Metas
    ├── Contas recorrentes
    └── Configurações
```

------------------------------------------------------------------------

# 17. Requisitos não funcionais

## 17.1 Segurança

-   Armazenamento seguro no banco.
-   Senhas nunca devem ser armazenadas em texto puro.
-   Autenticação segura.
-   Autorização por usuário.
-   Proteção de rotas privadas.
-   Validação de dados no servidor.
-   Validação de dados no cliente.
-   Proteção contra acesso indevido a registros de outros usuários.

## 17.2 Responsividade

A aplicação deve funcionar em:

-   Desktop.
-   Notebook.
-   Tablet.
-   Smartphone.

A experiência mobile não deve ser simplesmente uma versão reduzida da
desktop.

## 17.3 Performance

Priorizar:

-   Carregamento rápido.
-   Renderização eficiente.
-   Paginação em listas extensas.
-   Consultas otimizadas.
-   Evitar requisições desnecessárias.
-   Estados de loading apropriados.

## 17.4 Acessibilidade

Priorizar:

-   Contraste adequado.
-   Navegação por teclado.
-   Labels em formulários.
-   Feedback textual.
-   Estados de foco.
-   Sem depender somente de cores.
-   Áreas clicáveis adequadas em dispositivos móveis.

------------------------------------------------------------------------

# 18. Estados de interface

Toda tela ou componente que depende de dados deve considerar:

### Loading

Mostrar feedback durante carregamento.

### Empty State

Quando não existem dados.

Exemplo:

> "Você ainda não possui transações."

Deve existir CTA para criar a primeira transação.

### Error State

Mostrar erro de maneira compreensível.

Evitar mensagens técnicas para o usuário final.

### Success State

Confirmar operações importantes.

### Partial Data

A aplicação deve continuar útil mesmo quando determinado módulo ainda
não possui registros.

------------------------------------------------------------------------

# 19. Regras de negócio fundamentais

## RN01 --- Isolamento de dados

Usuários só podem acessar seus próprios dados.

## RN02 --- Receita

Receita aumenta o saldo financeiro disponível.

## RN03 --- Despesa

Despesa reduz o saldo financeiro disponível.

## RN04 --- Transferência

Transferência entre recursos próprios não representa receita nem
despesa.

## RN05 --- Meta

Meta representa uma reserva/alocação interna do dinheiro do usuário.

## RN06 --- Transferência para meta

Transferir dinheiro para uma meta reduz o saldo da origem e aumenta o
saldo da meta.

## RN07 --- Retirada da meta

Retirar dinheiro reduz o saldo da meta e aumenta o saldo do destino.

## RN08 --- Orçamento

Orçamento define limite planejado. Não representa dinheiro real
separado.

## RN09 --- Histórico

Excluir uma regra de organização não deve apagar automaticamente
histórico financeiro.

## RN10 --- Conta recorrente

Marcar uma conta como paga gera uma despesa.

## RN11 --- Idempotência

A mesma conta recorrente não pode gerar múltiplos pagamentos acidentais
para o mesmo ciclo.

## RN12 --- Valores monetários

Valores financeiros devem ser tratados com precisão adequada para
dinheiro. Evitar operações monetárias críticas baseadas exclusivamente
em ponto flutuante.

## RN13 --- Datas

Datas financeiras devem respeitar o fuso e a localidade configurados
para evitar deslocamentos de dia.

------------------------------------------------------------------------

# 20. Modelo conceitual de entidades

O banco de dados deverá evoluir em torno de entidades semelhantes às
seguintes:

``` text
User
│
├── Account / FinancialAccount
│   └── Transactions
│
├── Transactions
│   ├── Category
│   ├── Account
│   └── Goal
│
├── Category / Budget
│   └── Transactions
│
├── Goal / Pot
│   └── Transactions
│
└── RecurringBill
    └── Generated Transactions
```

### Observação

A nomenclatura definitiva das entidades pode mudar durante a
implementação, mas a separação conceitual deve ser preservada.

------------------------------------------------------------------------

# 21. Relacionamentos conceituais

## User

Possui:

-   contas;
-   transações;
-   categorias/orçamentos;
-   metas;
-   contas recorrentes;
-   configurações.

## Transaction

Pode estar associada a:

-   usuário;
-   conta de origem;
-   conta de destino;
-   categoria;
-   meta;
-   conta recorrente.

## Goal

Possui:

-   usuário;
-   valor alvo;
-   valor atual ou saldo derivado;
-   movimentações.

## Budget

Possui:

-   usuário;
-   categoria;
-   limite;
-   cor.

## RecurringBill

Possui:

-   usuário;
-   nome;
-   valor;
-   frequência;
-   próximo vencimento;
-   status;
-   relação com transações geradas.

------------------------------------------------------------------------

# 22. Dashboard e cálculos

O dashboard deve preferencialmente derivar seus indicadores a partir dos
dados financeiros reais.

Exemplos:

### Saldo atual

``` text
Saldo = Receitas - Despesas
```

Considerando corretamente transferências internas para que elas não
sejam contabilizadas como receita/despesa.

### Valor disponível do orçamento

``` text
Disponível = Limite - Total gasto da categoria
```

### Percentual do orçamento

``` text
Percentual = (Total gasto / Limite) × 100
```

### Progresso da meta

``` text
Progresso = (Valor acumulado / Valor da meta) × 100
```

O sistema deve limitar visualmente percentuais quando necessário, mas
não mascarar situações como orçamento excedido.

------------------------------------------------------------------------

# 23. UX/UI

## Direção visual

O produto deve transmitir:

-   organização;
-   confiança;
-   modernidade;
-   simplicidade;
-   controle;
-   clareza.

Evitar:

-   excesso de gradientes;
-   excesso de cards sem hierarquia;
-   dashboards visualmente poluídos;
-   gráficos decorativos sem função;
-   animações excessivas;
-   textos genéricos;
-   estética excessivamente "tech" sem relação com finanças.

## Hierarquia

A interface deve deixar evidente:

1.  Informação mais importante.
2.  Situação atual.
3.  Ação recomendada.
4.  Detalhes.

------------------------------------------------------------------------

# 24. Mobile

No mobile:

-   A navegação deve ser simples.
-   A criação de transação deve ser rápida.
-   Cards devem se adaptar ao espaço.
-   Tabelas devem ser transformadas em listas/cards quando necessário.
-   Gráficos devem permanecer legíveis.
-   Formulários devem evitar excesso de campos simultâneos.

A ação de adicionar uma transação deve ser facilmente acessível.

------------------------------------------------------------------------

# 25. Nice to Have / Roadmap

Estas funcionalidades não devem bloquear o MVP.

## 25.1 Push Notifications

Possibilidades:

-   Conta próxima do vencimento.
-   Conta vencida.
-   Meta atingida.
-   Alerta de orçamento próximo do limite.

## 25.2 Exportação PDF

Permitir gerar relatório financeiro.

Possíveis informações:

-   Receitas.
-   Despesas.
-   Saldo.
-   Categorias.
-   Metas.
-   Contas recorrentes.
-   Evolução mensal.

## 25.3 Investimentos

Permitir:

-   Cadastrar investimentos.
-   Informar valor investido.
-   Acompanhar rendimento.
-   Ver rendimento diário.
-   Ver rendimento mensal.
-   Ver evolução histórica.

## 25.4 Multilíngue

Adicionar suporte a outros idiomas.

A arquitetura deve evitar textos fixos espalhados pelo código.

## 25.5 Médias financeiras

Calcular:

-   Média mensal de despesas.
-   Média mensal de ganhos.

## 25.6 Meta de ganhos

Permitir definir uma meta de receita.

Exemplo:

> Meta mensal: R\$ 5.000

Exibir:

-   valor atingido;
-   percentual;
-   valor restante;
-   evolução.

## 25.7 Controle de gasolina

Possível módulo futuro:

-   Km/ano.
-   Km/mês.
-   Valor gasto com gasolina.
-   Consumo médio.
-   Custo por km.
-   Média mensal.
-   Histórico.

------------------------------------------------------------------------

# 26. Funcionalidades futuras recomendadas

Além do escopo original, considerar futuramente:

-   Cartões de crédito.
-   Faturas.
-   Parcelamentos.
-   Contas bancárias múltiplas.
-   Dívidas.
-   Empréstimos.
-   Importação de extratos.
-   CSV.
-   Open Finance.
-   Relatórios mensais.
-   Comparação entre meses.
-   Alertas de orçamento.
-   Busca global.
-   Tags.
-   Categorias personalizadas.
-   Backup.
-   Exportação de dados.
-   Histórico de alterações.
-   Metas com prazo.
-   Previsão de saldo futuro.

Essas funcionalidades devem ser avaliadas separadamente e não devem ser
implementadas automaticamente no MVP.

------------------------------------------------------------------------

# 27. Critérios de UX para novas funcionalidades

Antes de implementar uma nova funcionalidade, a IA deve responder:

1.  Qual problema ela resolve?
2.  Para qual usuário?
3.  Ela é necessária no MVP?
4.  Ela altera algum cálculo financeiro?
5.  Ela cria uma nova entidade?
6.  Ela interfere no histórico?
7.  Ela precisa de confirmação?
8.  Ela precisa de estado vazio?
9.  Ela precisa de loading/error state?
10. Ela funciona bem no mobile?
11. Ela pode causar duplicidade de dados?
12. Ela possui implicações de segurança?

------------------------------------------------------------------------

# 28. Regras para a IA durante o desenvolvimento

## 28.1 Não inventar requisitos

Se algo não estiver definido neste documento, a IA deve:

-   identificar a lacuna;
-   propor uma solução;
-   explicar a decisão;
-   evitar assumir comportamento crítico silenciosamente.

## 28.2 Priorizar o MVP

Não implementar funcionalidades futuras apenas porque são tecnicamente
interessantes.

## 28.3 Preservar dados

Nenhuma alteração deve causar perda de histórico financeiro sem
confirmação explícita.

## 28.4 Evitar duplicação

Antes de criar uma entidade, componente, função ou regra, verificar se
já existe algo equivalente.

## 28.5 Separação de responsabilidades

Manter separação entre:

-   UI;
-   componentes;
-   regras de negócio;
-   acesso a dados;
-   autenticação;
-   validações;
-   serviços;
-   utilitários.

## 28.6 Validação

Dados financeiros devem ser validados no cliente e no servidor.

## 28.7 Feedback

Toda operação que altera dados deve possuir feedback adequado.

## 28.8 Consistência

Uma regra implementada em um módulo deve continuar válida nos demais.

------------------------------------------------------------------------

# 29. Estrutura técnica recomendada

Caso seja utilizado Next.js, manter arquitetura modular e escalável.

Exemplo conceitual:

``` text
app/
├── (auth)/
│   ├── login/
│   └── signup/
│
├── (dashboard)/
│   ├── overview/
│   ├── transactions/
│   ├── budgets/
│   ├── goals/
│   ├── recurring-bills/
│   └── settings/
│
components/
├── ui/
├── dashboard/
├── transactions/
├── budgets/
├── goals/
└── recurring-bills/

lib/
├── auth/
├── db/
├── validations/
├── calculations/
└── utils/

services/
├── transactions/
├── budgets/
├── goals/
└── recurring-bills/

hooks/
styles/
types/
```

A estrutura final deve seguir a tecnologia efetivamente escolhida para o
projeto.

------------------------------------------------------------------------

# 30. Qualidade do código

A IA deve priorizar:

-   TypeScript quando disponível.
-   Tipagem forte.
-   Componentes reutilizáveis.
-   Funções pequenas.
-   Nomes sem ambiguidade.
-   Validações centralizadas.
-   Tratamento de erros.
-   Código legível.
-   Baixo acoplamento.
-   Testabilidade.

Evitar:

-   `any` sem justificativa;
-   lógica financeira dentro de componentes visuais;
-   duplicação de cálculos;
-   componentes gigantes;
-   consultas ao banco diretamente espalhadas pela UI;
-   regras de negócio duplicadas.

------------------------------------------------------------------------

# 31. Segurança e privacidade

O DH\|Finance trabalha com informações financeiras pessoais.

Portanto, a segurança deve ser considerada desde o início.

### Requisitos

-   Autenticação segura.
-   Autorização por recurso.
-   Senhas protegidas por hash.
-   Cookies/sessões seguros quando aplicável.
-   Validação de entrada.
-   Proteção contra acesso horizontal indevido.
-   Não expor dados financeiros desnecessários no frontend.
-   Não colocar segredos em código cliente.
-   Variáveis de ambiente para credenciais.
-   Logs sem informações financeiras sensíveis.

------------------------------------------------------------------------

# 32. SEO

O aplicativo autenticado não deve ser tratado como principal superfície
de SEO.

Caso exista uma landing page pública, ela poderá trabalhar SEO
separadamente.

Possível estrutura:

``` text
/
├── Landing Page
├── login
├── signup
└── app/
    ├── overview
    ├── transactions
    ├── budgets
    ├── goals
    └── recurring-bills
```

------------------------------------------------------------------------

# 33. Métricas de produto

No futuro, acompanhar:

### Ativação

-   Usuário criou conta.
-   Usuário cadastrou primeira transação.
-   Usuário criou primeira meta.
-   Usuário criou primeiro orçamento.

### Engajamento

-   Transações registradas.
-   Frequência de acesso.
-   Metas acompanhadas.
-   Orçamentos utilizados.
-   Contas recorrentes cadastradas.

### Retenção

-   Usuários ativos semanalmente.
-   Usuários ativos mensalmente.
-   Retorno após 7/30 dias.

### Valor

-   Usuários que registram transações regularmente.
-   Usuários que acompanham metas.
-   Usuários que utilizam orçamento.

------------------------------------------------------------------------

# 34. Critérios de aceite gerais

Uma funcionalidade só deve ser considerada concluída quando:

-   [ ] Funciona no fluxo principal.
-   [ ] Possui validação.
-   [ ] Possui estado de loading quando necessário.
-   [ ] Possui tratamento de erro.
-   [ ] Possui estado vazio quando aplicável.
-   [ ] Funciona em desktop.
-   [ ] Funciona em mobile.
-   [ ] Não permite acesso indevido.
-   [ ] Não cria dados duplicados.
-   [ ] Não quebra funcionalidades existentes.
-   [ ] Mantém consistência dos cálculos.
-   [ ] Possui feedback visual apropriado.

------------------------------------------------------------------------

# 35. Fluxos principais

## Fluxo 1 --- Novo usuário

``` text
Landing
→ Cadastro
→ Login/autenticação
→ Overview vazio
→ Criar primeira transação
→ Dashboard atualizado
```

## Fluxo 2 --- Registrar receita

``` text
Transações
→ Nova transação
→ Receita
→ Informar dados
→ Confirmar
→ Atualizar saldo
→ Atualizar dashboard
```

## Fluxo 3 --- Registrar despesa

``` text
Transações
→ Nova transação
→ Despesa
→ Categoria
→ Informar dados
→ Confirmar
→ Atualizar saldo
→ Atualizar orçamento
→ Atualizar dashboard
```

## Fluxo 4 --- Criar meta

``` text
Metas
→ Nova meta
→ Informar objetivo
→ Definir valor
→ Criar
→ Meta aparece no dashboard
```

## Fluxo 5 --- Adicionar dinheiro à meta

``` text
Meta
→ Adicionar dinheiro
→ Informar valor
→ Visualizar impacto
→ Confirmar
→ Transferência criada
→ Saldo da origem reduzido
→ Saldo da meta aumentado
→ Histórico atualizado
```

## Fluxo 6 --- Pagar conta recorrente

``` text
Contas recorrentes
→ Selecionar conta
→ Marcar como paga
→ Confirmar
→ Criar despesa
→ Atualizar status
→ Atualizar próximo vencimento
→ Atualizar dashboard
```

------------------------------------------------------------------------

# 36. Cenários de erro importantes

A IA deve considerar:

### Saldo insuficiente

Definir comportamento explicitamente antes de bloquear ou permitir a
operação.

### Meta sem saldo suficiente

Não permitir retirada superior ao saldo da meta.

### Orçamento ultrapassado

Não bloquear automaticamente a despesa. Exibir que o limite foi
ultrapassado, salvo decisão futura de produto.

### Conta recorrente paga duas vezes

Impedir duplicação do mesmo ciclo.

### Valor inválido

Rejeitar valores:

-   negativos quando não permitidos;
-   zero quando inválido;
-   mal formatados;
-   fora dos limites definidos.

### Categoria excluída

Histórico antigo deve permanecer íntegro.

### Meta excluída com saldo

O sistema precisa exigir uma regra explícita para esse caso antes da
implementação definitiva.

------------------------------------------------------------------------

# 37. Decisões ainda pendentes

Estas decisões devem ser definidas antes de algumas partes da
implementação.

## Alta prioridade

-   [ ] Quais contas financeiras existirão no sistema?
-   [ ] O usuário poderá ter múltiplas contas?
-   [ ] Haverá cartão de crédito no MVP?
-   [ ] Como o saldo inicial será informado?
-   [ ] Transferências exigirão contas de origem/destino obrigatórias?
-   [ ] Metas serão consideradas "contas" internamente ou terão entidade
    própria?
-   [ ] O valor da meta será calculado pelo histórico ou armazenado
    diretamente?
-   [ ] O que acontece ao excluir uma meta que possui dinheiro?
-   [ ] O que acontece ao editar uma conta recorrente já paga?
-   [ ] Como serão tratados lançamentos recorrentes futuros?
-   [ ] O orçamento será mensal ou terá período configurável?
-   [ ] As categorias serão globais, padrão do sistema ou
    personalizáveis por usuário?

## Média prioridade

-   [ ] Recuperação de senha.
-   [ ] Verificação de e-mail.
-   [ ] Avatar.
-   [ ] Perfil.
-   [ ] Tema claro/escuro.
-   [ ] Idioma.
-   [ ] Notificações.
-   [ ] Exportação.
-   [ ] Backup.

------------------------------------------------------------------------

# 38. Perguntas para fechar a especificação

Estas perguntas devem ser respondidas pelo responsável pelo produto
antes da implementação das partes correspondentes.

### 1. Contas financeiras

O usuário terá apenas um saldo geral ou poderá cadastrar contas como:

-   Conta corrente;
-   Carteira;
-   Poupança;
-   Banco A;
-   Banco B?

**Recomendação:** permitir múltiplas contas desde a modelagem, mesmo que
o MVP comece com uma conta principal.

### 2. Saldo inicial

No cadastro, o usuário poderá informar quanto já possui?

**Recomendação:** sim. Criar uma forma explícita de registrar saldo
inicial sem tratá-lo como receita mensal.

### 3. Cartão de crédito

Cartão de crédito fará parte do MVP?

**Recomendação:** deixar fora do MVP inicial se o objetivo for validar o
controle básico de receitas, despesas, metas e contas recorrentes.

### 4. Orçamento

O limite de uma categoria será:

-   mensal;
-   anual;
-   personalizado?

**Recomendação:** mensal no MVP.

### 5. Metas

Uma meta terá prazo?

Exemplo:

> "Comprar carro --- R\$ 30.000 até dezembro de 2027"

**Recomendação:** adicionar prazo futuramente, mas deixar a arquitetura
preparada.

### 6. Exclusão de meta com saldo

Se uma meta possui R\$ 1.000 e o usuário tenta excluí-la, o que deve
acontecer?

Opções:

-   devolver para uma conta;
-   bloquear exclusão;
-   exigir retirada antes;
-   transferir automaticamente para conta principal.

**Recomendação:** exigir que o saldo seja direcionado antes da exclusão.

### 7. Despesas recorrentes

Quando uma conta mensal vence, o sistema deve:

-   apenas alertar;
-   gerar automaticamente uma despesa pendente;
-   gerar uma despesa somente quando o usuário marcar como paga?

**Recomendação inicial:** criar o compromisso recorrente e registrar a
despesa efetiva quando marcada como paga.

### 8. Saldo negativo

O sistema poderá ter saldo negativo?

**Recomendação:** permitir representar a realidade financeira, mas
exibir claramente a situação.

### 9. Categorias

O usuário poderá criar categorias personalizadas?

**Recomendação:** sim.

### 10. Investimentos

Investimentos farão parte do MVP ou roadmap?

**Recomendação:** roadmap.

------------------------------------------------------------------------

# 39. Escopo recomendado do MVP

O MVP ideal deve se concentrar em:

``` text
Autenticação
    ↓
Saldo inicial
    ↓
Transações
    ├── Receita
    ├── Despesa
    └── Transferência
    ↓
Categorias / Orçamentos
    ↓
Metas
    ↓
Contas recorrentes
    ↓
Dashboard
```

O objetivo do MVP não é possuir todas as funcionalidades financeiras
possíveis.

O objetivo é criar um ciclo simples:

> **Registrar → Visualizar → Entender → Planejar → Melhorar**

------------------------------------------------------------------------

# 40. Definição de sucesso

O DH\|Finance será considerado bem-sucedido do ponto de vista do usuário
quando uma pessoa conseguir:

1.  Criar sua conta.
2.  Informar sua situação financeira inicial.
3.  Registrar receitas e despesas.
4.  Visualizar o saldo.
5.  Entender onde está gastando.
6.  Definir limites.
7.  Criar metas.
8.  Acompanhar contas futuras.
9.  Visualizar sua evolução.
10. Tomar decisões melhores com base nesses dados.

------------------------------------------------------------------------

# 41. Regra final para qualquer IA que trabalhar no projeto

Antes de alterar ou implementar qualquer parte do DH\|Finance:

1.  Leia este documento.
2.  Identifique o módulo afetado.
3.  Verifique as regras de negócio relacionadas.
4.  Verifique impactos em outros módulos.
5.  Não altere cálculos financeiros sem validar os efeitos.
6.  Não apague histórico sem uma regra explícita.
7.  Não invente requisitos críticos.
8.  Priorize o MVP.
9.  Preserve consistência visual e técnica.
10. Se existir uma decisão de produto pendente que impeça uma
    implementação correta, **pare e pergunte antes de assumir**.

> **Princípio central do projeto:** o DH\|Finance deve transformar dados
> financeiros em clareza e controle, sem transformar a vida financeira
> do usuário em uma experiência complexa.
