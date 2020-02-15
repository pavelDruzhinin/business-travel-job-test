using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Logging;

namespace BusinessTravelJob.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ToursController : ControllerBase
    {
        private readonly HttpClient _httpClient;

        public ToursController(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        [HttpGet]
        [Route("filter")]
        public async Task<string> Filter()
        {
            SetHeaders();

            var response = await _httpClient.GetAsync("https://api2.mouzenidis.com/search/filter/directions");

            return await response.Content.ReadAsStringAsync();
        }

        [HttpGet]
        [Route("search")]
        public async Task<string> Search()
        {
            SetHeaders();
            var query = Request.QueryString;

            //cache
            var response = await _httpClient.GetAsync($"https://api2.mouzenidis.com/search?{query}");

            return await response.Content.ReadAsStringAsync();

            //?departureCities%5b0%5d=1&countries%5b0%5d=29&dateFrom=2020-02-19&dateTo=2020-02-22&nights%5b0%5d=6&nights%5b1%5d=7&nights%5b2%5d=8&nights%5b3%5d=9&nights%5b4%5d=10"
        }

        private void SetHeaders()
        {
            var headers = new Dictionary<string, string>() {
                { "mzt-cityid","295" },
                { "mzt-currency","RUB" },
                { "mzt-lang","ru" },
                { "mzt-site-id","0" },
            };

            foreach (var header in headers)
            {
                _httpClient.DefaultRequestHeaders.Add(header.Key, header.Value);
            }
        }
    }
}
