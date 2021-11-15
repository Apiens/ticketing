Skaffold는
infra 디렉토리를 감시하고 변경사항이 있으면 cluster에 자동으로 반영한다.
auth 디렉토리에 변경이 있을 때에도 상응하는 container에 반영한다.

프로젝트 루트 디렉토리(ticketing)에서 skaffold.yaml을 작성하자

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
  artifacts:
    - image: apiens/auth
      context: auth # 앱의 폴더명
      docker:
        dockerfile: Dockerfile
      sync:
        manual:
          - src: 'src/**/*.ts' # 여기 해당하는 파일들 변경되면 컨테이너에도 변경시키고 재실행할것.
            dest: . # 컨테이너의 어디에 넣어줄지. .이면 src 에 정의된것과 동일 위치.
```

skaffold실행.
`skaffold dev`

