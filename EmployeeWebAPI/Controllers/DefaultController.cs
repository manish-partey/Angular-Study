using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EmployeeWebAPI.Controllers
{
    public class DefaultController : ApiController
    {
		public IEnumerable<Customer> Get()
		{
			using (NORTHWNDEntities obj = new NORTHWNDEntities())
			{
				return obj.Customers.ToList();
			}
		}

		// GET api/<controller>/5
		public Customer Get(string id)
		{
			using (NORTHWNDEntities obj = new NORTHWNDEntities())
			{
				return obj.Customers.FirstOrDefault(e => e.CustomerID == id);
			}
		}
	}
}
