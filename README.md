# business-travel-job-test

Test job where I implemented an ASP.NET core app with React for searching routes of airplanes.

I am using React, ASP.NET Core, Redis, Docker.

If you want to run the project then you need to install Redis. You can do it locally or like Docker container:

`docker run --name redis -p 6379:6379 -d redis redis-server --appendonly yes`

After that you can run app by Visual Studio or by terminal:

`dotnet run --project BusinessTravelJob`
