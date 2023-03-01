package com.tang.test.j2v8;

import android.app.Activity;
import android.text.TextUtils;
import android.util.Log;

import com.eclipsesource.v8.JavaVoidCallback;
import com.eclipsesource.v8.V8;
import com.tang.test.AsyncTaskBackListener;
import com.tang.test.J2V8ReadJavaScript;
import com.tang.test.MainActivity;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

/**
 * 描述: j2v8帮助实现类
 * 作者 : Tong
 * e-mail : itangbei@sina.com
 * 创建时间: 2019/8/28.
 */
public class J2V8Helper {

    /**
     * 获取js解析后的数据
     * @param context 上下文
     * @param convertName js的处理方法
     * @return js解析处理后的数据
     */
    public static String engineJs(J2V8Interface context,String convertName){
        return engineJs(context,convertName,"");
    }

    /**
     * 获取js解析后的数据
     * @param context 上下文
     * @param convertName js的处理方法
     * @param jsonString 单个上传字段
     * @return js解析处理后的数据
     */
    public static String engineJs(J2V8Interface context,String convertName,String jsonString){
        return engineJs(context,convertName,jsonString,null,"",null);
    }

    /**
     * 获取js解析后的数据
     * @param context 上下文
     * @param convertName js的处理方法
     * @param list 多个上传字段
     * @return js解析处理后的数据
     */
    public static String engineJs(J2V8Interface context,String convertName,List<Object> list){
        return engineJs(context,convertName,"",list,"",null);
    }

    /**
     * 获取js解析后的数据
     * @param context 上下文
     * @param convertName js的处理方法
     * @param jsonString 单个上传字段
     * @param list 多个上传字段
     * @param registName java回调注册的方法
     * @param voidCallback 注册java方法到js中的处理回调
     * @return js解析处理后的数据
     */
    public static String engineJs(J2V8Interface context, String convertName, String jsonString, List<Object> list, String registName, JavaVoidCallback voidCallback){
        if (null == context) return "";
        if (TextUtils.isEmpty(convertName)) return "";
        String jsonJs = "";
        Log.d("j2v8Helper----->","js处理开始");
        if (TextUtils.isEmpty(context.getJs())){
            Log.d("j2v8Helper----->","js读取本地js文件中");
            InputStream INPUTSTREAM = context.getClass().getResourceAsStream("/assets/j2v8/j2v8test.js");//获取js脚本的输入流
            try {
                jsonJs = J2V8Util.supplyAsync(INPUTSTREAM);
            } catch (Exception e) {
                e.printStackTrace();
            }
            Log.d("j2v8Helper----->","本地js文件读取完成");
        }else {
            Log.d("j2v8Helper----->","js读取数据库js脚本中");
            jsonJs = context.getJs();
        }
        V8 v8 = V8.createV8Runtime();//启动v8
        Log.d("j2v8Helper----->","v8已启动");
        String response = "";//js解析结果
        if (!TextUtils.isEmpty(jsonJs)) {
            //先判断v8是否存在，以及是否被释放
            if (null != v8 && !v8.isReleased()) {
                //v8获取js的方法类
                v8.executeVoidScript(jsonJs);
                Log.d("j2v8Helper----->","js已注入到v8中");
                if (null != voidCallback){
                    //如果回调不为空，则注册回调
                    v8.registerJavaMethod(voidCallback,registName);
                    Log.d("j2v8Helper----->" ,registName + "方法已注册到js");
                }
                List<Object> putList = new ArrayList<>();
                if (!TextUtils.isEmpty(jsonString)){
                    if (list == null){
                        list = new ArrayList<>();
                    }
                    list.add(jsonString);
                    Log.d("j2v8Helper----->","当前是单字段上传");
                }
                if (null != list){
                    putList.addAll(list);
                    Log.d("j2v8Helper----->","当前是多字段上传");
                }
                response = J2V8Util.v8StringFunction(v8, convertName, J2V8Util.getV8Array(v8, putList));
                Log.d("j2v8Helper----->","js处理完毕");
                Log.d("j2v8Helper----->","js解析结果："+response);
//                v8.release();//使用完，释放v8
                Log.d("j2v8Helper----->","v8已释放");
            }
        }else {
            Log.d("j2v8Helper----->","获取js失败");
        }
        return response;
    }
}
