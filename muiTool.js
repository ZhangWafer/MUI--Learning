		
		//根据radio  class的名字取值
		function getClassRadioValue(className) {
			var classFind = document.getElementsByClassName(className);
			for(i = 0; i < classFind.length; i++) {
				if(classFind[i].checked) {
					return classFind[i].value;
				}
			}
		}