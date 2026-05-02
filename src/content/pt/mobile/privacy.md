---
head: {
    title: 'Política de Privacidade - Sport Track Merger',
    description: "Política de Privacidade do aplicativo Sport Track Merger"
}
title: 'Política de Privacidade'
---

**Última atualização: 19/06/2025**

## 1. Responsável pelo tratamento

O tratamento dos dados pessoais é assegurado por:

**Bily Victorien**  
Desenvolvedor independente – Microempresário  
34 Rue Bugeaud, 29200 Brest, França  
✉️ Contato: [b.vic.dev@gmail.com](mailto:b.vic.dev@gmail.com)

## 2. Dados coletados e finalidade

O aplicativo **Sport Track Merger** **não coleta nenhum dado pessoal identificável** do usuário.

Os dados provenientes da **API do Strava** (atividades, métricas, ID de usuário) são apenas **armazenados localmente** no celular do usuário para permitir a **mesclagem ou duplicação** de atividades.  
> **Nenhum desses dados é transmitido a um servidor de terceiros**, nem é conservado pelo editor.

As atividades mescladas ou duplicadas são criadas localmente e, em seguida, **enviadas diretamente ao Strava**. Os arquivos gerados são **excluídos automaticamente** após o envio.

### Dados anônimos coletados:

- **Erros e falhas** (via Firebase Crashlytics): coleta automática, **não desativável**
- **Ações do usuário e desempenho** (via Firebase Analytics e Performance): **podem ser ativados/desativados** nas configurações do aplicativo
- **ID Strava criptografado** (não reversível): usado para associar uma **licença Pro** a uma conta

A autenticação segura no Strava é gerenciada por meio de uma **Cloud Function do Firebase**:  
> Ela protege as chaves da API, **sem processar dados pessoais**.

## 3. Base legal do tratamento

As operações de tratamento no aplicativo são baseadas em:

- **O contrato** entre o usuário e o aplicativo para acessar os recursos do Strava
- **O consentimento explícito do usuário** para o monitoramento de uso (Analytics), **ativável/desativável nas configurações**

## 4. Conservação dos dados

- O editor **não armazena nenhum dado pessoal** em seus próprios servidores
- Apenas **dados técnicos anônimos** são armazenados pelo **Firebase**, de acordo com suas políticas de retenção
- Os arquivos de atividade são gerados localmente e **excluídos do dispositivo após o uso**

## 5. Plataformas de distribuição

O aplicativo é distribuído por meio de:

- **Google Play Store** (Google Ireland Ltd.)
- **Apple App Store** (Apple Inc.)

Essas plataformas podem coletar dados de uso e de diagnóstico (instalação, desempenho, etc.)  
> Esses dados são **coletados pelo Google ou pela Apple**, com **consentimento dado nas configurações do dispositivo**.

O editor tem acesso **apenas a dados anônimos e agregados**.

### Para mais informações:

- [Google Play – Configurações de privacidade](https://support.google.com/accounts/answer/3118621)  
- [Apple – Privacidade e configurações](https://support.apple.com/108971)

## 6. Serviços de terceiros e transferências de dados fora da UE

O aplicativo utiliza os seguintes serviços:

- **Firebase (Google)**: falhas, desempenho, analytics  
- **RevenueCat**: gestão de compras no aplicativo

> O RevenueCat utiliza um **identificador anônimo** (derivado do ID Strava criptografado) para associar uma licença a um usuário.  
> Nenhum **dado pessoal identificável** é transmitido.

Esses provedores podem processar dados **fora da União Europeia**, recorrendo a **cláusulas contratuais padrão** em conformidade com o GDPR.

## 7. Direitos do usuário

Em conformidade com o **GDPR**, o usuário dispõe dos seguintes direitos:

- **Acesso, retificação e exclusão** dos dados locais (desinstalando o aplicativo ou saindo da conta)
- **Revogação do acesso ao Strava** por meio da [página dedicada do Strava](https://www.strava.com/settings/apps)
- **Oposição ao monitoramento analítico** por meio das configurações do aplicativo
- **Contatar o responsável pelo tratamento**: [b.vic.dev@gmail.com](mailto:b.vic.dev@gmail.com)

## 8. Público-alvo

O aplicativo destina-se a usuários elegíveis a uma **conta Strava**, ou seja:

- **Pelo menos 13 anos de idade**, ou a idade mínima exigida em seu país de residência

## 9. Atualizações da política

Esta política pode ser **alterada a qualquer momento**.  
Qualquer versão atualizada será publicada no aplicativo ou no site oficial.

> O usuário é incentivado a consultar regularmente a versão mais recente disponível.
