# promise-demo
a promise-demo that figure two classical promoise questions 

1.红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次；如何让三个灯按照这个规律不断交替重复亮灯？（用Promse实现）三个亮灯函数已存在

2.实现一个LazyMan，可以按照以下方式调用:

    LazyMan(“Hank”)输出:
    
    Hi! This is Hank!
    
    LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
    
    Hi! This is Hank!
    
    //等待10秒..
    
    Wake up after 10
    
    Eat dinner~
    
    LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
    
    Hi This is Hank!
    
    Eat dinner~
    
    Eat supper~
    
    LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
    
    //等待5秒
    
    Wake up after 5
    
    Hi This is Hank!
    
    Eat supper
    
    以此类推。
