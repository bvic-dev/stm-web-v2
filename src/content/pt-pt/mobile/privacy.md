---
head: {
    title: 'Política de Privacidade - Sport Track Merger',
    description: "Política de Privacidade da aplicação Sport Track Merger"
}
title: 'Política de Privacidade'
---

**Última atualização: 19/06/2025**

## 1. Responsável pelo tratamento

O tratamento dos dados pessoais é assegurado por:

**Bily Victorien**  
Programador independente – Empresário em nome individual  
34 Rue Bugeaud, 29200 Brest, França  
✉️ Contacto: [b.vic.dev@gmail.com](mailto:b.vic.dev@gmail.com)

## 2. Dados recolhidos e finalidade

A aplicação **Sport Track Merger** **não recolhe quaisquer dados pessoais identificáveis** do utilizador.

Os dados provenientes da **API do Strava** (atividades, métricas, ID de utilizador) são apenas **armazenados localmente** no telemóvel do utilizador para permitir a **fusão ou duplicação** de atividades.  
> **Nenhum destes dados é transmitido a um servidor de terceiros**, nem é conservado pelo editor.

As atividades fundidas ou duplicadas são criadas localmente e, em seguida, **enviadas diretamente para o Strava**. Os ficheiros gerados são **eliminados automaticamente** após o envio.

### Dados anónimos recolhidos:

- **Erros e falhas** (via Firebase Crashlytics): recolha automática, **não desativável**
- **Ações do utilizador e desempenho** (via Firebase Analytics e Performance): **podem ser ativados/desativados** nas definições da aplicação
- **ID Strava encriptado** (não reversível): utilizado para associar uma **licença Pro** a uma conta

A autenticação segura no Strava é gerida através de uma **Cloud Function do Firebase**:  
> Esta protege as chaves da API, **sem processar dados pessoais**.

## 3. Base legal do tratamento

As operações de tratamento na aplicação baseiam-se em:

- **O contrato** entre o utilizador e a aplicação para aceder às funcionalidades do Strava
- **O consentimento explícito do utilizador** para o acompanhamento de utilização (Analytics), **ativável/desativável nas definições**

## 4. Conservação dos dados

- O editor **não armazena quaisquer dados pessoais** nos seus próprios servidores
- Apenas **dados técnicos anónimos** são armazenados pelo **Firebase**, de acordo com as suas políticas de retenção
- Os ficheiros de atividade são gerados localmente e **eliminados do dispositivo após utilização**

## 5. Plataformas de distribuição

A aplicação é distribuída através de:

- **Google Play Store** (Google Ireland Ltd.)
- **Apple App Store** (Apple Inc.)

Estas plataformas podem recolher dados de utilização e de diagnóstico (instalação, desempenho, etc.)  
> Estes dados são **recolhidos pela Google ou pela Apple**, com **consentimento prestado nas definições do dispositivo**.

O editor tem acesso **apenas a dados anónimos e agregados**.

### Para mais informações:

- [Google Play – Definições de privacidade](https://support.google.com/accounts/answer/3118621)  
- [Apple – Privacidade e definições](https://support.apple.com/108971)

## 6. Serviços de terceiros e transferências de dados fora da UE

A aplicação utiliza os seguintes serviços:

- **Firebase (Google)**: falhas, desempenho, analytics  
- **RevenueCat**: gestão de compras na aplicação

> O RevenueCat utiliza um **identificador anónimo** (derivado do ID Strava encriptado) para associar uma licença a um utilizador.  
> Não são transmitidos quaisquer **dados pessoais identificáveis**.

Estes prestadores podem processar dados **fora da União Europeia**, recorrendo a **cláusulas contratuais-tipo** em conformidade com o RGPD.

## 7. Direitos do utilizador

Em conformidade com o **RGPD**, o utilizador dispõe dos seguintes direitos:

- **Acesso, retificação e eliminação** dos dados locais (desinstalando a aplicação ou terminando sessão)
- **Revogação do acesso ao Strava** através da [página dedicada do Strava](https://www.strava.com/settings/apps)
- **Oposição ao acompanhamento analítico** através das definições da aplicação
- **Contactar o responsável pelo tratamento**: [b.vic.dev@gmail.com](mailto:b.vic.dev@gmail.com)

## 8. Público-alvo

A aplicação destina-se a utilizadores elegíveis para uma **conta Strava**, ou seja:

- **Pelo menos 13 anos de idade**, ou a idade mínima exigida no seu país de residência

## 9. Atualizações da política

Esta política pode ser **alterada a qualquer momento**.  
Qualquer versão atualizada será publicada na aplicação ou no site oficial.

> O utilizador é incentivado a consultar regularmente a versão mais recente disponível.
