클러스터 외부에서의 입력을 받아주는 ingress를 설정해주자.

ingress-nginx가 설치되어있지 않다면
https://kubernetes.github.io/ingress-nginx/deploy/ 에 나온 대로 설치하면 된다.

아래코드를 실행해서 설치할 수 도 있다. 
(추후에 브라우저에서 ERR_CONNECTION_REFUSED 가 뜬다면 아래코드를 실행하지 않아서 (i.e. ingress-nginx설치&실행을 안해서) 일 수 있다.)
`kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.0.4/deploy/static/provider/cloud/deploy.yaml`

infra 디렉토리에 ingress-srv.yaml을 생성하고 작성하자.

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-service
  annotations:
    kubernetes.io/ingress.class: nginx
    nginx.ingress.kubernetes.io/use-regex: "true"
spec:
  rules:
    - host: ticketing.dev
      http:
        paths:
          - path: /api/users/?(.*) #이 path에 해당되는 것들을 backend의 service로 보낸다.
            pathType: Prefix
            backend:
              service:
                name: auth-srv
                port:
                  number: 3000
```