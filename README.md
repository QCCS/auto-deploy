# auto-deploy

演示本项目自动发布前端

1.登陆 github，找到需要自动发布的项目，点击 settings

2.点击左边菜单 webhooks ,点击右边 add webhook
有很多钩子函数，当你push，或者forks，创建标签，wiki被更新等等等等
就选 push 事件
就是每当有 push 代码的时候，就发送一个请求过去

3.然后登陆服务器，把自动发布项目部署一下