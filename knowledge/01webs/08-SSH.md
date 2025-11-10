# SSH

- Es un protocolo que significa Secure Shell
- Anque pueden detectar la conexcion va a estar encriptada entonces no se puede hacer nada
- La informacion por SSH es encriptada durante todo el trayecto
- Se transmite por conecion TCP, se transmite primero un packed lenght, luego un padding info luego el payload y luego random bytes que sirvern para encriptar la info y por ultimo el message authentication code
- Con SSH tunnel se puede comunicar a travez de un firewall

```bash
eval "$(ssh-agent -s)"
ssh-add /c/Users/juan/.ssh/bambinoKey
ssh-add -l
```
