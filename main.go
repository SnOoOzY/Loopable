func main() {   
  var addr = flag.String("addr", ":8080", "The addr of the  application.") 
  flag.Parse() // parse the flags 
  r := newRoom() 
  http.Handle("/", &templateHandler{filename: "chat.html"}) 
  http.Handle("/room", r) 
  // get the room going 
  go r.run() 
  // start the web server 
  log.Println("Starting web server on", *addr) 
  if err := http.ListenAndServe(*addr, nil); err != nil { 
    log.Fatal("ListenAndServe:", err) 
  } 
} 

func (t *templateHandler) ServeHTTP(w http.ResponseWriter, r  *http.Request) { 
  t.once.Do(func() { 
    t.templ =  template.Must(template.ParseFiles(filepath.Join("templates",
      t.filename))) 
  }) 
  t.templ.Execute(w, r) 
} 

socket = new WebSocket("ws://{{.Host}}/room"); 

go build -o chat 
./chat -addr=":3000" 
