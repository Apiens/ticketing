Ingress-nginx를 gke에 맞게 셋업해주자

```
kubectl create clusterrolebinding cluster-admin-binding \
  --clusterrole cluster-admin \
  --user $(gcloud config get-value account)

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.0.4/deploy/static/provider/cloud/deploy.yaml
```

로컬머신의 HOST도 다시 바꿔주자.
`code /etc/hosts`
내 cluster에 사용되고있는 gcp loadbalancer의 ip주소를 넣어주면 된다.
`34.64.219.190 ticketing.dev`
