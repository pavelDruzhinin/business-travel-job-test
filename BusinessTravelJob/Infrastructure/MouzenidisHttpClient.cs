using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace BusinessTravelJob.Infrastructure
{
    public class MouzenidisHttpClient : HttpClient
    {
        public MouzenidisHttpClient()
        {
            BaseAddress = new Uri("https://api2.mouzenidis.com/");
            SetHttpClientHeaders();
        }

        public async Task<string> GetFilter()
        {
            var response = await GetAsync("/search/filter/directions");

            return await response.Content.ReadAsStringAsync();
        }

        public async Task<string> GetToursByQuery(string query)
        {
            var response = await GetAsync($"/search?{query}");

            return await response.Content.ReadAsStringAsync();
        }
        
        private void SetHttpClientHeaders()
        {
            var headers = new Dictionary<string, string>()
            {
                {"mzt-cityid", "295"},
                {"mzt-currency", "RUB"},
                {"mzt-lang", "ru"},
                {"mzt-site-id", "0"},
            };

            foreach (var header in headers)
            {
                DefaultRequestHeaders.Add(header.Key, header.Value);
            }
        }
    }
}