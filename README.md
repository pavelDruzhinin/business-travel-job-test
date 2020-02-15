# business-travel-job-test

Для запуска проекта необходим Redis. Его можно развернуть локально или в виде docker-контейнера:

`docker run --name redis -p 6379:6379 -d redis redis-server --appendonly yes`

После этого приложение можно запустить средствами Visual Studio или командой в терминале:

`dotnet run --project BusinessTravelJob`