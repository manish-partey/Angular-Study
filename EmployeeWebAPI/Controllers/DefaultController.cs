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
		public IEnumerable<DC_PLT_Support_CodeLists> Get()
		{
			using (ExampleDataEntities obj = new ExampleDataEntities())
			{
				return obj.DC_PLT_Support_CodeLists.ToList();
			}
		}

		// GET api/<controller>/5
		public DC_PLT_Support_CodeLists Get(string id)
		{
			using (ExampleDataEntities obj = new ExampleDataEntities())
			{
				return obj.DC_PLT_Support_CodeLists.FirstOrDefault(e => e.Code == id);
			}
		}
	}
}
