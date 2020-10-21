function resolve(process,colleague){

	var userList = new java.util.ArrayList();
	
	var pais = "Aprovadores_" + hAPI.getCardValue("pais") + "Rayssa";

	userList.add("Pool:Group:" + pais);
	
	return userList;
	
}