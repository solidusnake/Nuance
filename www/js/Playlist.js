
function Playlist(titre,tabmus) {
  // Pour les playlists, le constructeur est : tabmusiques, durée, émobulle dominante, titre et id
  this.tabM=tabmus;
  this.titre=titre;
  this.emoDom;
  this.duree;
  if(tabmus==null){}// Si on utilise le constructeur par défaut
  else{
    // Sert à assigner une émobulle dominante
    var tabEmo=new Array();
    var tempsemo=0;
    var indiceemo=0;
    for(var a=0;a<10;a++){
      tabEmo[a]=0;
    }
    for(var z=0;z<this.tabM.length;z++){
      if(this.tabM[z].emobulle=="colere"){tabEmo[0]=tabEmo[0]+this.tabM[z].duree} // La durée doit être en secondes
      if(this.tabM[z].emobulle=="espoir"){tabEmo[1]=tabEmo[1]+this.tabM[z].duree}
      if(this.tabM[z].emobulle=="joie"){tabEmo[2]=tabEmo[2]+this.tabM[z].duree}
      if(this.tabM[z].emobulle=="energie"){tabEmo[3]=tabEmo[3]+this.tabM[z].duree}
      if(this.tabM[z].emobulle=="passion"){tabEmo[4]=tabEmo[4]+this.tabM[z].duree}
      if(this.tabM[z].emobulle=="melancolie"){tabEmo[5]=tabEmo[5]+this.tabM[z].duree}
      if(this.tabM[z].emobulle=="reve"){tabEmo[6]=tabEmo[6]+this.tabM[z].duree}
      if(this.tabM[z].emobulle=="calme"){tabEmo[7]=tabEmo[7]+this.tabM[z].duree}
      if(this.tabM[z].emobulle=="tendresse"){tabEmo[8]=tabEmo[8]+this.tabM[z].duree}
      if(this.tabM[z].emobulle=="tristesse"){tabEmo[9]=tabEmo[9]+this.tabM[z].duree}
      if(this.tabM[z].emobulle=="vide"){tabEmo[10]=tabEmo[10]+this.tabM[z].duree}
    }
    for(var z=0;z<tabEmo.length;z++){
      if(z==0){
        tempsemo=tabEmo[0];
      }
      else{
        if(tabEmo[z]>tempsemo){
          tempsemo=tabEmo[z];
          indiceemo=z;
        }
      }
    }

    if(indiceemo==0){this.emoDom="colere"}
    if(indiceemo==1){this.emoDom="espoir"}
    if(indiceemo==2){this.emoDom="joie"}
    if(indiceemo==3){this.emoDom="energie"}
    if(indiceemo==4){this.emoDom="passion"}
    if(indiceemo==5){this.emoDom="melancolie"}
    if(indiceemo==6){this.emoDom="reve"}
    if(indiceemo==7){this.emoDom="calme"}
    if(indiceemo==8){this.emoDom="tendresse"}
    if(indiceemo==9){this.emoDom="tristesse"}
    if(indiceemo==10){this.emoDom="vide"}
    // Sert à assigner des durées
    var dureeT;
    for(var y=0;y<this.tabM.length;y++){
      dureeT=dureeT+this.tabM[y];
    }
    this.duree=dureeT;
  }
  // Sert à assigner des id
  var x=0;
  var bool=true;
  while(bool==true){
    var str="p"+x;
    if(localStorage.getItem(str)!=null){
      x++;
    }
    else{
      bool=false;

      this.id="p"+x; // On assigne
    }
  }

  this.inputBD=function(){ // Permet d'insérer une musique dans la bd
  alert(this.id);
  var versJson = JSON.stringify(this);
  localStorage.setItem(this.id,versJson);
};
this.recupBD=function(id){ // Récupère la musique de la bd
  var monobjet_json = localStorage.getItem(id);
  var musique = JSON.parse(monobjet_json);
  return musique;
};
this.effacer=function(id){ // Efface la musique
  localStorage.removeItem(id);
};
this.effacerBD=function(){
  localStorage.clear(); // /!\ ATTENTION CA EFFACE TOUTE LA BASE DE DONNEES
};
this.addMusiquetoPlaylist=function(musique){
  this.tabM[this.tabM.length]=musique;
};
this.supprimerMusique=function(idMus){
  for(var x=0;x<tabM.length;x++){
    if(this.tabM[x].id==idMus){
      this.tabM.splice(x,x);
    }
  }
};
this.creaPlaylist=function(nbM,emo1,emo2,emo3,tag1,tag2,tag3,nbec){
  // Nombre de musiques, émobulles (3 max), tags (3 max), nombre d'écoutes
  if(nbM==0){
    nbM=20;
  }
  var tabBD=new Array();
  var muse=new Musique();
  var x=0;
  var bool=true;
  var tabEmo=new Array();
  var tabTag=new Array();
  var tabCarac=new Array();
  var tabFinal=new Array();
  var nbMus=0;
  if(emo1!="vide"){tabEmo.push(emo1);}
  if(emo2!="vide"){tabEmo.push(emo2);}
  if(emo3!="vide"){tabEmo.push(emo3);}
  if(tag1!="vide"){tabTag.push(tag1);}
  if(tag2!="vide"){tabTag.push(tag2);}
  if(tag3!="vide"){tabTag.push(tag3);}
  while(bool==true){
    nbMus++;
    var str="m"+x;
    if(localStorage.getItem(str)!=null){
      tabBD[x]=muse.recupBD(str);
      x++;
    }
    else{
      bool=false;
    }
  }
  var nbMusCarac=0;
  for(var x=0;x<tabBD.length;x++){
    if(tabBD[x].emobulle==tabEmo[0]||tabBD[x].emobulle==tabEmo[1]||tabBD[x].emobulle==tabEmo[2]||tabBD[x].tag1==tabTag[0]||tabBD[x].tag2==tabTag[1]||tabBD[x].tag3==tabTag[2]){
      tabCarac[nbMusCarac]=tabBD[x];
      nbMusCarac++;
    }
  }
  var nbMt0=nbM;
  var tabRand=new Array();
  var recommence=false;
  while(nbMt0!=0){
    nbMt0--;
    var random=0;
    do{
      recommence=false;
      random=Math.floor(Math.random()*tabCarac.length);
      if(tabRand.length==0){
        tabRand.push(random);
      }
      else{
        for(var x=0;x<tabRand.length;x++){
          if(tabRand[x]==random){
            recommence=true;
          }
        }
      }
    }
    while(recommence==true);
    tabRand.push(random);
    tabFinal.push(tabCarac[random]);
  }
  this.tabM=tabFinal;
  var dureeT=0;
  for(var y=0;y<this.tabM.length;y++){
    dureeT=dureeT+this.tabM[y].duree;
  }
  this.duree=dureeT;
  return tabFinal;
};
}
