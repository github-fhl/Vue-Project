"use strict";
const merge = require("webpack-merge");

module.exports = merge({}, {
	NODE_ENV: "'development'", // node 启动版本
	TAGNAME: "'dev'", // cookie 存取前缀
	COREHR_URL: "'https://test-swagger.ecosaas.com/ecosaascorehr/api/ecosaas/corehr'",
	// tenantId: "''",
	// tenantId: "'a4f4b08a-23fb-4263-b4fa-6e5dd7e5b3a7'",//dev-康师傅
	tenantId: "'371e9130-0e44-4c30-ada7-a5fc2d1b7767'",
	tenantToken: "'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ7XCJlbWFpbFwiOlwiSWtlLkxpQUBjZHBncm91cGx0ZC5jb21cIixcImlkTnVtYmVyXCI6XCI2MTA1ODExOTk4MTAxMDAzMTFcIixcImxvY2FsZVwiOlwiemhfQ05cIixcIm91SWRcIjoxNjc1NzQsXCJwZXJzb25JZFwiOlwiNWRiOTJjOTYxMjY5ZDJiY2Y4NGEyYjBjXCIsXCJwaG9uZVwiOlwiMTM2NDM0NzM1OTZcIixcInRlbmFudENvZGVcIjpcImJheWVydGVzdFwiLFwidGVuYW50SWRcIjpcIjM3MWU5MTMwLTBlNDQtNGMzMC1hZGE3LWE1ZmMyZDFiNzc2N1wiLFwidXNlcklkXCI6XCI1ZGI5MmM5NjEyNjlkMmJjZjg0YTJiMGNcIixcInVzZXJuYW1lXCI6XCJHTElKRVwifSIsImF1dGgiOiJST0xFX0VNUCxST0xFX0hSIiwiZXhwIjoxNTk4NDQ4ODgzfQ.yu1qtMmcBt3voigQvGy6__IC5akd7NmnqeS2nSowjP5cwE4bwMnCTe1OLpEfDsLQLJs-0pdlUsQQ0uC9JyVMoQ'"
});
