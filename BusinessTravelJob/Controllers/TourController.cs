using System.Threading.Tasks;
using BusinessTravelJob.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Distributed;

namespace BusinessTravelJob.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ToursController : ControllerBase
    {
        private readonly MouzenidisHttpClient _httpClient;
        private readonly IDistributedCache _cache;
        private readonly HttpQueryKeyGenerator _httpQueryKeyGenerator;

        public ToursController(MouzenidisHttpClient httpClient, IDistributedCache cache, HttpQueryKeyGenerator httpQueryKeyGenerator)
        {
            _httpClient = httpClient;
            _cache = cache;
            _httpQueryKeyGenerator = httpQueryKeyGenerator;
        }

        [HttpGet]
        [Route("filter")]
        public async Task<string> Filter()
        {
            return await _httpClient.GetFilter();
        }

        [HttpGet]
        [Route("search")]
        public async Task<string> Search()
        {
            var query = Request.QueryString.ToString();

            var key = _httpQueryKeyGenerator.Generate(query);

            var toursJson = await _cache.GetStringAsync(key);

            if (toursJson != null) 
                return toursJson;
            
            toursJson = await _httpClient.GetToursByQuery(query);

            await _cache.SetStringAsync(key, toursJson);

            return toursJson;
        }
    }
}