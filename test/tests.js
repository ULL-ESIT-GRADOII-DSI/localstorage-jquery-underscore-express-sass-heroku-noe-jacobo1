var assert = chai.assert;


suite('csv', function() {
  if (typeof __html__ !== 'undefined') {
	document.body.innerHTML = __html__["tests/index.html"];
	original = document.getElementById("original");
	finaltable = document.getElementById("finaltable");
  }


  test('Almacenamiento local', function () {
	original.value = 'Funciona, el, almacenamiento, interno';
	main();
  original.value = 'nuevo valor';
	assert.deepEqual(localStorage.original, 'Funciona, el, almacenamiento, interno');
  });


  test('Introducion simple caracteres', function () {
  original.value = 'a, b, c, d\naa, bb, cc, dd';
	main();
	var esperado ='\n      <table id="result" class="center">\n        \n          <tbody><tr class="">\n            \n              <td>a</td>\n            \n              <td>b</td>\n            \n              <td>c</td>\n            \n              <td>d</td>\n            \n          </tr>\n        \n          <tr class="">\n            \n              <td>aa</td>\n            \n              <td>bb</td>\n            \n              <td>cc</td>\n            \n              <td>dd</td>\n            \n          </tr>\n        \n      </tbody></table>\n    ' ;
	assert.deepEqual(finaltable.innerHTML, esperado);
  });


  test('Introducion simple digitos', function () {
	original.value = '1,2,3\n4,5,6';
	main();
	var valueExpected = '\n      <table id="result" class="center">\n        \n          <tbody><tr class="">\n            \n              <td>1</td>\n            \n              <td>2</td>\n            \n              <td>3</td>\n            \n          </tr>\n        \n          <tr class="">\n            \n              <td>4</td>\n            \n              <td>5</td>\n            \n              <td>6</td>\n            \n          </tr>\n        \n      </tbody></table>\n    ';
	assert.deepEqual(finaltable.innerHTML, valueExpected);
  });


  test('Prueba Imput 1', function () {
  original.value = '"producto",           "precio"\n"camisa",             "4,3"\n"libro de O\"Reilly", "7,2"';
  main();
  var valueExpected = '\n      <table id="result" class="center">\n        \n          <tbody><tr class="">\n            \n              <td>producto</td>\n            \n              <td>precio</td>\n            \n          </tr>\n        \n          <tr class="">\n            \n              <td>camisa</td>\n            \n              <td>4,3</td>\n            \n          </tr>\n        \n          <tr class="error">\n            \n              <td>libro de O</td>\n            \n              <td>Reilly</td>\n            \n              <td>7,2</td>\n            \n          </tr>\n        \n      </tbody></table>\n    ' ;
  assert.deepEqual(finaltable.innerHTML, valueExpected);
  });

  test('Prueba Imput 2', function () {
  original.value = '"producto",           "precio"  "fecha"\n"camisa",             "4,3",    "14/01"\n"libro de O\"Reilly", "7,2"     "13/02"\n';
  main();
  var valueExpected = '\n      <table id="result" class="center">\n        \n          <tbody><tr class="">\n            \n              <td>producto</td>\n            \n              <td>precio</td>\n            \n              <td>fecha</td>\n            \n          </tr>\n        \n          <tr class="">\n            \n              <td>camisa</td>\n            \n              <td>4,3</td>\n            \n              <td>14/01</td>\n            \n          </tr>\n        \n          <tr class="error">\n            \n              <td>libro de O</td>\n            \n              <td>Reilly</td>\n            \n              <td>7,2</td>\n            \n              <td>13/02</td>\n            \n          </tr>\n        \n      </tbody></table>\n    ' ;
  assert.deepEqual(finaltable.innerHTML, valueExpected);
  });

  test('Prueba Imput 3', function () {
  original.value = '"producto",           "precio"  "fecha"\n    "libro de O\"Reilly", "7,2"     "13/02"\n    "camisa",             "4,3",    "14/01"\n\n    "camisa",             "4,3",    \n            ,             "4,3",    \n';
  main();
  var valueExpected = '\n      <table id="result" class="center">\n        \n          <tbody><tr class="">\n            \n              <td>producto</td>\n            \n              <td>precio</td>\n            \n              <td>fecha</td>\n            \n          </tr>\n        \n          <tr class="error">\n            \n              <td>libro de O</td>\n            \n              <td>Reilly</td>\n            \n              <td>7,2</td>\n            \n              <td>13/02</td>\n            \n          </tr>\n        \n          <tr class="">\n            \n              <td>camisa</td>\n            \n              <td>4,3</td>\n            \n              <td>14/01</td>\n            \n          </tr>\n        \n          <tr class="">\n            \n              <td>camisa</td>\n            \n              <td>4,3</td>\n            \n              <td></td>\n            \n          </tr>\n        \n          <tr class="">\n            \n              <td></td>\n            \n              <td>4,3</td>\n            \n              <td></td>\n            \n          </tr>\n        \n      </tbody></table>\n    ' ;
  assert.deepEqual(finaltable.innerHTML, valueExpected);
  });

  test('Prueba Imput 4', function () {
  original.value = '"producto",           "precio",  "fecha"\n    "camisa",             "4,3",    "14/01"\n    \n     "dfd"            ,               " z"  , \n    \n    "camisa",             "4,3",    \n    \n            ,             "4,3",    \n    \n    "libro de O\"Reilly", "7,2"     "13/02"\n';
  main();
  var valueExpected ='\n      <table id="result" class="center">\n        \n          <tbody><tr class="">\n            \n              <td>producto</td>\n            \n              <td>precio</td>\n            \n              <td>fecha</td>\n            \n          </tr>\n        \n          <tr class="">\n            \n              <td>camisa</td>\n            \n              <td>4,3</td>\n            \n              <td>14/01</td>\n            \n          </tr>\n        \n          <tr class="">\n            \n              <td>dfd</td>\n            \n              <td> z</td>\n            \n              <td></td>\n            \n          </tr>\n        \n          <tr class="">\n            \n              <td>camisa</td>\n            \n              <td>4,3</td>\n            \n              <td></td>\n            \n          </tr>\n        \n          <tr class="">\n            \n              <td></td>\n            \n              <td>4,3</td>\n            \n              <td></td>\n            \n          </tr>\n        \n          <tr class="error">\n            \n              <td>libro de O</td>\n            \n              <td>Reilly</td>\n            \n              <td>7,2</td>\n            \n              <td>13/02</td>\n            \n          </tr>\n        \n      </tbody></table>\n    ' ;
  assert.deepEqual(finaltable.innerHTML, valueExpected);
  });
});
