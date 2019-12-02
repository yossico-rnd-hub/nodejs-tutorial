# nodejs-tutorial

## locks service software requirements
A service that has the following behavior (given a string resource identifier):
1. lock a resource (fails if alreay locked, support lock expiration/TTL)
2. renew resource lock (reset TTL)
3. unlock (release) a resource
4. register/unregister requests for unlock notifications
