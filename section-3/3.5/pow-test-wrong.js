it("Возводит x в степень n", function() {
    let x = 5;
  
    let result = x;
    assert.equal(pow(x, 1), result);
  
    result *= x;
    assert.equal(pow(x, 2), result);
  
    result *= x;
    assert.equal(pow(x, 3), result);
  });

// тесты не разделены на отдельные блоки, при ошибке на одном из тестов
// будет не ясно в каком именно случае возникает ошибка  