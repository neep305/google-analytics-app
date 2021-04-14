# Google Analytics Data API (GA4)
https://developers.google.com/analytics/devguides/reporting/data/v1


# 개발스펙 정리
1. Frontend
- 내용: 대시보드 화면 개발(성별/기기별 방문자 구분)
- 기술스택: React(Rechart, Material UI)

2. Backend
- Node Swagger: 
- 기술스택: node.js(swagger) or python(fastapi)

3. 배포
- Firebase

# 개발에 필요한 GA4 report 기능 정리
## 기본적인 아이디어
### With the Google Analytics Data API v1, you can create reports to answer questions like:

- How many daily active users has my Android app had in the last week?
- How many page views has each of the top 10 page URLs for my site received in the last 28 days?
- How many active users per country has my iOS app had in the last 30 minutes?

### The Google Analytics Data API v1 can also be used to:

- Build custom dashboards to display Google Analytics data.
- Automate complex reporting tasks to save time.
- Integrate your Google Analytics data with other business applications.

### GA4 API를 사용하기 위한 개발환경 세팅
1. Enable the API

2. GCP 서비스 어카운트 json 파일 내려받기
- 해당 json 파일은 어플리케이션에서 구글API 인증시 꼭 필요한 키 
- json 파일을 열어보면 아래와 같이 client_email이 있다.
```json
{
  "type": "service_account",
  "project_id": "<프로젝트아이디>",
  "private_key_id": "<개인키아이디>",
  "private_key": "-",
  "client_email": "<메일주소>.iam.gserviceaccount.com",
  "client_id": "XXX",
  "auth_uri": "XXX",
  "token_uri": "XXX",
  "auth_provider_x509_cert_url": "XXX",
  "client_x509_cert_url": "XXX"
}

```
3. 인증설정
- 로컬 or 서버환경에 직접 Global 등록하는 방식
```
export GOOGLE_APPLICATION_CREDENTIALS="[PATH]"
```
- 어플리케이션에 등록하는 방식
  - dotenv module 사용(node.js기준)
  ```shell
    npm i dotenv
  ```

.env
```
# GOOGLE_AUTH
GOOGLE_APPLICATION_CREDENTIALS=<PATH>
```

/ga4/index.js
```javascript
require('dotenv').cofig();

```