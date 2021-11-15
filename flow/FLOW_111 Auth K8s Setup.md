auth 앱 폴더에 Dockerfile작성

```
FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]
```

auth 앱 폴더에 .dockerignore작성

```
node_modules
```

도커 이미지 빌드.
`docker build -t apiens/auth .`

이미지를 pod화하여 띄우기 위한 deployment 작성
auth 앱 폴더와 같은 레벨에 infra 폴더 생성, 진입
k8s폴더 생성, 진입

auth-depl.yaml파일 생성, 작성
depoloy된 pod에 물려줄 kubernetes service도 정의.
별도의 yaml에 만들어도 되지만, deployment와과 거의 1:1 관계이므로 depl.yaml에 함께 정의한다.

```
# Deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: auth-depl
spec:
  replicas: 1
  selector: # deployment가 pod을 찾는데 쓰임.
    matchLabels:
      app: auth
  template: # deployment가 pod을 생성하는 방법.
    metadata: # 바로 위에 정의한 lable을 가진 pod을 생성.
      labels:
        app: auth
    spec: # pod이 갖춰야 할 스펙
      containers: # 돌아가야할 컨테이너들.
        - name: auth # 컨테이너 명
          image: apiens/auth # 컨테이너 돌리는데 사용할 이미지

---
# Service
apiVersion: v1
kind: Service
metadata:
  name: auth-srv
spec:
  # type 을 지정하지 않음 -> default 인 cluster-ip service 가 됨.
  # cluster-ip service는 클러스터 내부에서의 요청만 받아준다는걸 기억하자.
  selector:
    app: auth
  ports:
    - name: auth
      protocol: TCP
      port: 3000
      targetPort: 3000
```
