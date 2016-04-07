var assert = chai.assert;


suite('Pruebas con CSV', function() {
  setup(function(){
     if (typeof __html__ !== 'undefined') {
         document.body.innerHTML = __html__['index.html'];
         convert = document.getElementById('original');
         converted = document.getElementById('result');
     }
   });
   suite('Prueba 1', function() {
     test('"producto", "precio" "camisa","4,3""libro de O\"Reilly", "7,2"', function() {
       convert.match("producto", "precio" "camisa","4,3""libro de O\"Reilly", "7,2");
       main();
       assert.match(converted.innerHTML, /ERROR/);
     });
     test('5C to C = error', function() {
       convert.value = "5c to c";
       main();
       assert.match(converted.innerHTML, /ERROR/);
     });
   });
   suite('Farenheit a... ', function() {
      test('32F to C = 0C', function() {
          convert.value = "32f to c";
          main();
          assert.deepEqual(converted.innerHTML, "0.00 toCelsius");
      });
      test('77F to K = 298.00 K', function() {
             convert.value = "77f to k";
             main();
             assert.deepEqual(converted.innerHTML, "298.00 toKelvin");
      });
    });
    suite('Celsius a... ', function() {
      test('32C to F = 89.60C', function() {
        convert.value = "32c to f";
        main();
        assert.deepEqual(converted.innerHTML, "89.60 toFarenheit");
      });
      test('44C to K = 317.15K', function() {
        convert.value = "44c to k";
        main();
        assert.deepEqual(converted.innerHTML, "317.15 toKelvin");
      });
    });
    suite('Kelvin a... ', function() {
      test('10K to F = -441.40F', function() {
        convert.value = "10k to f";
        main();
        assert.deepEqual(converted.innerHTML, "-441.40 toFarenheit");
      });
      test('98K to C = -175.15C', function() {
        convert.value = "98k to c";
        main();
        assert.deepEqual(converted.innerHTML, "-175.15 toCelsius");
      });
    });
});
