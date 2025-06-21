#include <assert.h>
#include <node_api.h>
#include <sys/time.h>
#include <time.h>

static napi_value Getdate(napi_env env, napi_callback_info info) {
  napi_status status;
  napi_value date;
  time_t timep;
  time(&timep);
  char * ct = ctime(&timep);
  status = napi_create_string_utf8(env, ct, 100, &date);
  assert(status == napi_ok);
  return date;
}

#define DECLARE_NAPI_METHOD(name, func)                                        \
  { name, 0, func, 0, 0, 0, napi_default, 0 }

static napi_value Init(napi_env env, napi_value exports) {
  napi_status status;
  napi_property_descriptor desc = DECLARE_NAPI_METHOD("getdate", Getdate);
  status = napi_define_properties(env, exports, 1, &desc);
  assert(status == napi_ok);
  return exports;
}

NAPI_MODULE(NODE_GYP_MODULE_NAME, Init)
