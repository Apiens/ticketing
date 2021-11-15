skaffold.yaml 을 변경해주자

```
apiVersion: skaffold/v2alpha3
kind: Config
deploy:
  kubectl:
    manifests:
      - ./infra/k8s/* # 이 위치에 있는 config file들 모두 실행.
build:
  local:
    push: false # 변화가 있을때마다 원격 저장소에 푸시할 것인가.
  googleCloudBuild:
    projectId: local-chalice-331107
  artifacts:
    - image: us.gcr.io/local-chalice-331107/auth
      context: auth # 앱의 폴더명
      docker:
        dockerfile: Dockerfile
      sync:
        manual:
          - src: 'src/**/*.ts' # 여기 해당하는 파일들 변경되면 컨테이너에도 변경시키고 재실행할것.
            dest: . # 컨테이너의 어디에 넣어줄지. .이면 src 에 정의된것과 동일 위치.
```