# Next.js + TypeORM(Postgres) + Docker

## Spec
### Next.js
https://nextjs.org/
### TypeORM
https://typeorm.io/
### Postgres
https://www.postgresql.org/
### Docker
https://www.docker.com/
## 환경세팅방법
- 최초 아래 명령어 실행
```bash
$ docker-compose -f docker-compose-first.yml up -d --build
```
- 다음부터는 아래 명령어로 빌드 및 실행
```bash
$ docker-compose up -d --build
```

### 주요 기능
1. **Next.js**: 서버 사이드 렌더링(SSR) 및 정적 사이트 생성(SSG)을 지원하여 SEO와 성능을 최적화합니다.
2. **TypeORM**: 객체 관계 매핑(ORM)을 통해 데이터베이스 작업을 간소화하고, 코드 기반의 마이그레이션을 제공합니다.
3. **Postgres**: 강력한 관계형 데이터베이스로 데이터 저장 및 관리.
4. **Docker**: 컨테이너 기반의 환경 설정으로 일관된 개발 및 배포 환경을 제공합니다.

### 사용 사례
- 사용자 인증 및 권한 관리
- 데이터 시각화 및 대시보드
- RESTful API 또는 GraphQL API 백엔드

### 디렉토리 구조
- `/pages`: Next.js 페이지 컴포넌트
- `/entities`: TypeORM 엔티티 정의
- `/migrations`: 데이터베이스 마이그레이션 파일
- `/docker`: Docker 관련 설정 파일

### 요구사항
- Node.js >= 14.x
- Docker 및 Docker Compose
- Postgres 데이터베이스