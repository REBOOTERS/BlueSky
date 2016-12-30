package com.rongrong.plugins;

import android.util.Log;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

/**
 * Created by rookie on 2016/12/6.
 */

public class HttpHelper extends CordovaPlugin {

  private OkHttpClient client;
  private Request request;
  private CallbackContext mCallback;


  @Override
  public void initialize(CordovaInterface cordova, CordovaWebView webView) {
    super.initialize(cordova, webView);
    client = new OkHttpClient();
  }

  @Override
  public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
    mCallback = callbackContext;
    JSONObject options = null;

    if (action.equals("getData")) {
      options = args.getJSONObject(0);
      String url = options.getString("url");
      Request.Builder builder = new Request.Builder()
        .url(url)
        .method("GET", null);

      request = builder.build();
      Call mCall = client.newCall(request);
      mCall.enqueue(new MyCallback());


    } else {
      return false;
    }

    return true;
  }

  private class MyCallback implements Callback {

    @Override
    public void onFailure(Call call, IOException e) {
      mCallback.error(e.toString());
      Log.e("fail", "reason is" + e.toString());
    }

    @Override
    public void onResponse(Call call, Response response) throws IOException {
      String result = response.body().string();
      Log.e("success", "result is" + result);
      mCallback.success(result);
    }
  }
}
