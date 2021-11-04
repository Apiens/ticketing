전 단계에서 ingress의 host를 ticketing.dev로 설정했다.

인터넷에 도메인을 등록해서 사용할게 아니기 때문에 내 기기 안에서 만이라도 host를 등록해 사용해보도록 하자.
localhost-> 127.0.0.1 로 인식하듯
ticketing.dev 도 127.0.0.1 로 인식하게 하면 된다.

mac/linux의 경우 /etc/hosts
Windows의 경우 C:\Windows\System32\Drivers\etc\hosts
파일을 수정하면 된다. (관리자 권한으로 수정해야함.)

```
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1	localhost
255.255.255.255	broadcasthost
::1             localhost
# Added by Docker Desktop
# To allow the same kube context to work on the host and the container:
127.0.0.1 kubernetes.docker.internal
# End of section
127.0.0.1 ticketing.dev
```

수정완료 후 크롬에 들어가서 ticketing.dev로 접근하면 Your connection is not private 에러화면이 나온다.
창 안에서 'thisisunsafe' 를 입력하면 화면이 보이게 된다.
