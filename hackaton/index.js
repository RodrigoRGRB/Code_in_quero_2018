const Discord = require('discord.js');
const client = new Discord.Client();

'use strict';

const fs = require('fs');


var mysql = require('mysql');

		var con = mysql.createConnection({
			host: "localhost",
			user: "root",
			password: "",
			database: "quero"
    });
/*teste*/

con.connect();

con.query('select * from usuario;', function(err, results, fields) {
if(err) throw err;

  fs.writeFile('usuario.json', JSON.stringify(results), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
});
let rawdata = fs.readFileSync('usuario.json');  
let users = JSON.parse(rawdata); 

con.query('select * from tarefas;', function(err, results, fields) {
  if(err) throw err;
  
    fs.writeFile('tarefas.json', JSON.stringify(results), function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  });
  let rawdata1 = fs.readFileSync('tarefas.json');  
  let tarefa = JSON.parse(rawdata1); 
  
  con.query('select * from skill;', function(err, results, fields) {
    if(err) throw err;
    
      fs.writeFile('skill.json', JSON.stringify(results), function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    });
    let rawdata2 = fs.readFileSync('skill.json');  
    let skill = JSON.parse(rawdata2); 
    
    con.query('select * from skillxtarefa;', function(err, results, fields) {
      if(err) throw err;
      
        fs.writeFile('skillxtarefa.json', JSON.stringify(results), function (err) {
          if (err) throw err;
          console.log('Saved!');
        });
      });
      let rawdata3 = fs.readFileSync('skillxtarefa.json');  
      let sxt = JSON.parse(rawdata3); 

    con.query('select * from usuarioxskill;', function(err, results, fields) {
      if(err) throw err;
      
        fs.writeFile('usuarioxskill.json', JSON.stringify(results), function (err) {
          if (err) throw err;
          console.log('Saved!');
        });
      });
      let rawdata4 = fs.readFileSync('usuarioxskill.json');  
      let uxs = JSON.parse(rawdata4);      
   
    
function atualizar(){

  var mysql = require('mysql');

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "quero"
  });
/*teste*/

con.connect();

con.query('select * from usuario;', function(err, results, fields) {
if(err) throw err;

fs.writeFile('usuario.json', JSON.stringify(results), function (err) {
  if (err) throw err;
  console.log('Saved!');
});
});
let rawdata = fs.readFileSync('usuario.json');  
let users = JSON.parse(rawdata); 

con.query('select * from tarefas;', function(err, results, fields) {
if(err) throw err;

  fs.writeFile('tarefas.json', JSON.stringify(results), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
});
let rawdata1 = fs.readFileSync('tarefas.json');  
let tarefa = JSON.parse(rawdata1); 

con.query('select * from skill;', function(err, results, fields) {
  if(err) throw err;
  
    fs.writeFile('skill.json', JSON.stringify(results), function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  });
  let rawdata2 = fs.readFileSync('skill.json');  
  let skill = JSON.parse(rawdata2); 
  
  con.query('select * from skillxtarefa;', function(err, results, fields) {
    if(err) throw err;
    
      fs.writeFile('skillxtarefa.json', JSON.stringify(results), function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    });
    let rawdata3 = fs.readFileSync('skillxtarefa.json');  
    let sxt = JSON.parse(rawdata3); 

  con.query('select * from usuarioxskill;', function(err, results, fields) {
    if(err) throw err;
    
      fs.writeFile('usuarioxskill.json', JSON.stringify(results), function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    });
    let rawdata4 = fs.readFileSync('usuarioxskill.json');  
    let uxs = JSON.parse(rawdata4);

    console.log("atualizouuuuuuuuu");
};



console.log(users);  
console.log(tarefa); 
console.log(skill);
console.log(sxt);
console.log(uxs);




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 
});


//tarefa = ["feijao","teste"];



client.on('message', message => {
  var mysql = require('mysql');

  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "quero"
  });
/*teste*/

con.connect();

con.query('select * from usuario;', function(err, results, fields) {
if(err) throw err;

fs.writeFile('usuario.json', JSON.stringify(results), function (err) {
  if (err) throw err;
  console.log('Saved!');
});
});
let rawdata = fs.readFileSync('usuario.json');  
let users = JSON.parse(rawdata); 

con.query('select * from tarefas;', function(err, results, fields) {
if(err) throw err;

  fs.writeFile('tarefas.json', JSON.stringify(results), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
});
let rawdata1 = fs.readFileSync('tarefas.json');  
let tarefa = JSON.parse(rawdata1); 

con.query('select * from skill;', function(err, results, fields) {
  if(err) throw err;
  
    fs.writeFile('skill.json', JSON.stringify(results), function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  });
  let rawdata2 = fs.readFileSync('skill.json');  
  let skill = JSON.parse(rawdata2); 
  
  con.query('select * from skillxtarefa;', function(err, results, fields) {
    if(err) throw err;
    
      fs.writeFile('skillxtarefa.json', JSON.stringify(results), function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    });
    let rawdata3 = fs.readFileSync('skillxtarefa.json');  
    let sxt = JSON.parse(rawdata3); 

  con.query('select * from usuarioxskill;', function(err, results, fields) {
    if(err) throw err;
    
      fs.writeFile('usuarioxskill.json', JSON.stringify(results), function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
    });
    let rawdata4 = fs.readFileSync('usuarioxskill.json');  
    let uxs = JSON.parse(rawdata4);

  
  // If the message is "ping"
  message.content.toLocaleLowerCase();

  escolher = message.content.split(" ");
  
  if (escolher[0] === '!sim') {
    message.channel.sendMessage("boa escolha pequeno jumento");
  }

  if (escolher[0] === '!nao') {
    message.channel.sendMessage("Isto não é uma opção <3 é uma missão, boa sorte");
  }

  if(escolher[0] === '!meajudou'){
    
    var u;
    console.log(escolher[1]);
    for(u in users){
      if(users[u].nome == escolher[1]){
        idUsuario = users[u].id;
        console.log(users[u].pontos);
        pontuacao = parseInt(users[u].pontos) + 10;
        console.log(pontuacao);
      }
    }

    var mysql = require('mysql');

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "quero"
    });

    //inicio
    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "UPDATE usuario SET pontos = "+pontuacao+" WHERE nome ='"+escolher[1]+"'";
      con.query(sql, function (err, result) {
        if (err) throw err;
        message.channel.sendMessage("Pontos enviados");
      });
    });
  }

  if(escolher[0] === '!perfil'){
    var u,sk,s;
    message.channel.sendMessage("veja seu perfil");
    for(u in users){
      if(users[u].tagdiscord ==  message.author.tag){
        idUsuario = users[u].id;
        
      }
    }

    for(sk in uxs){
      if(uxs[sk].usuario == idUsuario){
        iii = parseInt(uxs[sk].skill);
        for (jl in skill){
          if (skill[jl].id == iii){
            message.channel.sendMessage(skill[jl].nome+" com um nivel de: "+uxs[sk].nivel);
          }
        }
          //message.channel.sendMessage(skill[j].nome+" com um nivel de "+uxs[sk].nivel);
        }
      
    }
    
    
    
  }

  if(escolher[0] === '!ajudar'){
    var sx, t, p = [], cont;
    message.channel.sendMessage("Quem pode te ajudar");
    for(sx in sxt){
      if(sxt[sx].tarefa == escolher[1]){
        habilidade = sxt[sx].skill;
        for(t in tarefa){
          if(tarefa[t].status == "Concluido" && sxt[sx].skill == habilidade){
    
            for(u in users){
              if(users[u].id == tarefa[t].pessoa){
                p.push(users[u].tagdiscord+" - https://github.com/"+users[u].tagdiscord);
              }
            }
           
          }
        }
      }
    }

    var novaArr = p.filter(function(este, i) {
      return p.indexOf(este) == i;
    })
    message.channel.sendMessage(novaArr);

  }


  if (escolher[0] === '!escolher') {

    var sx, t, i,contTarefa = 0,soma =0;

    for(sx in sxt){
      if(sxt[sx].tarefa == escolher[1]){
        habilidade = sxt[sx].skill;
        for(t in tarefa){
          if(tarefa[t].status == "Concluido" && sxt[sx].skill == habilidade){
            i = new Date(tarefa[t].inicio);
            f = new Date(tarefa[t].fim);
            console.log("Projetos Criados:"+tarefa[t].descricao);
            console.log("Inicio: "+tarefa[t].inicio);
            console.log("mes "+i.getMonth());
            console.log("mes "+f.getMonth());
            console.log("Fim: "+tarefa[t].fim);

            if(i.getMonth() == f.getMonth()){
              console.log("datas iguais");
              numero = parseInt(f.getDate()) - parseInt(i.getDate());

              console.log("numero = "+numero);
              contTarefa = contTarefa + 1;
              console.log(contTarefa);
              soma = soma + parseInt(numero*10);
              console.log(soma);
            }
            for(u in users){
              if(users[u].id == tarefa[t].pessoa){
                console.log("Criador(a):"+users[u].nome);

              }
            }

            
           
          }
        }
      }
    }

    message.channel.sendMessage(contTarefa+" pessoas já fizeram esta tarefa a media de horas desse tipo de tarefa é de "+ parseInt(soma/contTarefa)+" horas");
    message.channel.sendMessage("Desafio concluir sua tarefa em "+parseInt(parseInt(soma/contTarefa) * 0.8)+ "horas");
    message.channel.sendMessage("Voce aceita o desafio ? caso aceite terá um boost de 2x; responda !sim ou !nao");
 
    for(u in users){
      if(users[u].tagdiscord == message.author.tag){
        idusuario = users[u].id;
      }
    }

    var mysql = require('mysql');

		var con = mysql.createConnection({
			host: "localhost",
			user: "root",
			password: "",
			database: "quero"
		});

		//inicio
		con.connect(function(err) {
			if (err) throw err;
			console.log("Connected!");
			var sql = "UPDATE tarefas SET pessoa="+idusuario+", status='executando' WHERE id="+escolher[1];
			con.query(sql, function (err, result) {
				if (err) throw err;
				message.channel.sendMessage("Espero sua resposta <3");
			});
		});
    //termino
    con.query('select * from tarefas;', function(err, results, fields) {
      if(err) throw err;
      
        fs.writeFile('tarefas.json', JSON.stringify(results), function (err) {
          if (err) throw err;
          console.log('Saved!');
        });
      });
  }




	
	if(escolher[0] == '!cadastrar'){
    //inicio
    
		var mysql = require('mysql');

		var con = mysql.createConnection({
			host: "localhost",
			user: "root",
			password: "",
			database: "quero"
		});

		con.connect(function(err) {
			if (err) throw err;
			console.log("Connected!");
			var sql = "INSERT INTO usuario VALUES (null, '"+message.author.tag+"','"+escolher[1]+"','false','"+message.author.avatarURL+"', 'iniciante', 0)";
			con.query(sql, function (err, result) {
				if (err) throw err;
				message.channel.sendMessage("cadastrado");
			});
		});
		//termino
	}


  if(escolher[0] == '!agora'){
message.channel.sendMessage("procurando tarefas");
  
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "quero"
});
/*teste*/

con.connect();

con.query('select * from usuario;', function(err, results, fields) {
if(err) throw err;

fs.writeFile('usuario.json', JSON.stringify(results), function (err) {
if (err) throw err;
console.log('Saved!');
});
});
let rawdata = fs.readFileSync('usuario.json');  
let users = JSON.parse(rawdata); 

con.query('select * from tarefas;', function(err, results, fields) {
if(err) throw err;

fs.writeFile('tarefas.json', JSON.stringify(results), function (err) {
  if (err) throw err;
  console.log('Saved!');
});
});
let rawdata1 = fs.readFileSync('tarefas.json');  
let tarefa = JSON.parse(rawdata1); 

con.query('select * from skill;', function(err, results, fields) {
if(err) throw err;

  fs.writeFile('skill.json', JSON.stringify(results), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
});
let rawdata2 = fs.readFileSync('skill.json');  
let skill = JSON.parse(rawdata2); 

con.query('select * from skillxtarefa;', function(err, results, fields) {
  if(err) throw err;
  
    fs.writeFile('skillxtarefa.json', JSON.stringify(results), function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  });
  let rawdata3 = fs.readFileSync('skillxtarefa.json');  
  let sxt = JSON.parse(rawdata3); 

con.query('select * from usuarioxskill;', function(err, results, fields) {
  if(err) throw err;
  
    fs.writeFile('usuarioxskill.json', JSON.stringify(results), function (err) {
      if (err) throw err;
      console.log('Saved!');
    });
  });
  let rawdata4 = fs.readFileSync('usuarioxskill.json');  
  let uxs = JSON.parse(rawdata4);


    //inicio
    var t,s,sx,u,idusuario,su;
    for(u in users){
      if(users[u].tagdiscord == message.author.tag){
        idusuario = users[u].id;
      }
    }

    console.log(tarefa);
    var tem = 0;
    for(t in tarefa){
      exigencia = 0;
      proeficiencia = 0;
      if(tarefa[t].status == "Disponivel"){
        
        for(sx in sxt){
          
          if(sxt[sx].tarefa == tarefa[t].id){
            for(su in uxs){
              if(uxs[su].usuario == idusuario && uxs[su].skill == sxt[sx].skill){
                proeficiencia = proeficiencia + parseInt(uxs[su].nivel);
                
              }
            }

            exigencia = exigencia + parseInt(sxt[sx].exigencia);
            console.log(exigencia);
            console.log(proeficiencia);
          } 
        }

        if(proeficiencia <= (exigencia+10) && proeficiencia >= (exigencia/2)){
          message.channel.sendMessage(tarefa[t].id+" - "+tarefa[t].descricao);
          tem++;
        }
      }
    }
    if(tem==0){
      message.channel.sendMessage("Não há tarefas disponiveis");
    }

		//termino
  }
  


  if (escolher[0] === '!detalhes') {

    var t,s,sx,u,idusuario,su;
    for(u in users){
      if(users[u].tagdiscord == message.author.tag){
        idusuario = users[u].id;
      }
    }

    
        for(sx in sxt){
          
          if(sxt[sx].tarefa == escolher[1]){
            for(s in skill){
              if(sxt[sx].skill == skill[s].id){
                message.channel.sendMessage(skill[s].nome);
              }
            }
          }
        }
    }

  if(escolher[0] == "!data"){
    var d = new Date();
    console.log("--------------------- Feijao");
    data = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate();
    console.log(data);
  }


  if (escolher[0] === '!entregar'){
    
    var u,t;
    for(u in users) {
      if(users[u].tagdiscord == message.author.tag){
        idusuario = users[u].id;
      }
    }

    var d = new Date();
    data = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate();
    console.log(data);

    console.log(idusuario);
    for(t in tarefa){
      if(tarefa[t].status == "executando"){
        if(tarefa[t].pessoa == idusuario){
          teste = tarefa[t].id;
          console.log("printando teste"+teste);
          var mysql = require('mysql');

          var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "quero"
          });

          //inicio
          con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            var sql = "UPDATE tarefas SET pessoa="+idusuario+", status='analisando', fim = "+data+" WHERE id="+teste;
            con.query(sql, function (err, result) {
              if (err) throw err;
              message.channel.sendMessage(teste+ " entregue");
            });
          });
        }
      }
    }
  }
});

  


  



client.login('NDQxMzg4NzU3MjUwMzQyOTMy.Dc-Q4g.S5BCbC3E7ppUrCAQTNA4B-00CSg');