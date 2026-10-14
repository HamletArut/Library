class Book{
  constructor(id,title,author,publisher,pages,copies){
    this.id = id
    this.title = title
    this.author = author
    this.publisher = publisher
    this.pages = pages
    this.copies = copies
    localStorage.se
  }
}
class Visitor{
  constructor(id,name,phone){
    this.id = id
    this.name = name
    this.phone = phone
  }
}
class Card{
  constructor(id,visitorId,bookId,borrowDate,returnDate){
    this.id = id
    this.visitorId=visitorId
    this.bookId=bookId
    this.borrowDate = borrowDate
    this.returnDate = returnDate
  }
}


// localStorage.clear()
let allVisitors = JSON.parse(localStorage.getItem("visitors"))
if(allVisitors == null){
  let visitors = [
    { id: 1, name: 'Collete Kelley', phone: '0124354567' },
    { id: 2, name: 'Ruby-Rose Lennon ', phone: '0126473424' },
    { id: 3, name: 'Leanne Gibbson', phone: '018797845' },
    { id: 4, name: 'Rumaisa Peel', phone: '0124566467' },
    { id: 5, name: 'Gene Medrano', phone: '0122454789' },
    { id: 6, name: 'Sheridan Tucker Kelley', phone: '0123458590' },
    { id: 7, name: 'Christina Mack', phone: '0121233646' },
    { id: 8, name: 'Everly Moses', phone: '0126789974' },
    { id: 9, name: 'Kara Fenney', phone: '0124569653' },
    { id: 10, name: 'Cameron Rennie', phone: '0129674785' },
    { id: 11, name: 'Scott Allen', phone: '0121231244' },
    { id: 12, name: 'Lina Knowles', phone: '0126789973' },
    { id: 13, name: 'Maxwell Escobar', phone: '0124569665' },
    { id: 14, name: 'Marie Thomas', phone: '0129674756' },
    { id: 15, name: 'Chelsea Moreno', phone: '0121232345' },
    { id: 16, name: 'Jonah Morse', phone: '0126780000' },
    { id: 17, name: 'Meghan Perez', phone: '0124569655' },
    { id: 18, name: 'Ethan Hughes', phone: '0129674786' },
  ]
  allVisitors = []
  for(const visitor of visitors)
    allVisitors.push(new Visitor(visitor.id,visitor.name,visitor.phone))
  localStorage.setItem("visitors",JSON.stringify(allVisitors))
}

let allBooks = JSON.parse(localStorage.getItem("books"))
if(allBooks == null){
  let books = [
    {id:1,title:'JavaScript Crash Course',author:'Nick Morgan',publisher:'No Starch Press',pages:300,copies:5},
    {id:2,title:'Understanding JavaScript Promises',author:'Nicholas C. Zakas',publisher:'Lulu Press',pages:94,copies:7},
    {id:3,title:'Code Like a Pro in C#',author:'Jort Rodenburg',publisher:'Manning Publications',pages:416,copies:3},
    {id:4,title:'Learning SQL',author:'Alan Beaulieu',publisher:`O'Reilly Media, Inc, USA`,pages:338,copies:6},
    {id:5,title:'Multithreaded Javascript',author:'Thomas Hunter, Bryan English',publisher:`O'Reilly Media, Inc.`,pages:211,copies:10},
    {id:6,title:'Introducing Regular Expressions',author:'Jörg Krause',publisher:'Apress',pages:48,copies:2},
    {id:7,title:'The Joy of JavaScript',author:'Luis Atencio',publisher:'Manning',pages:360,copies:6},
    {id:8,title:'C Primer Plus',author:'Stephen Prata',publisher:`Pearson Education`,pages:1072,copies:3},
    {id:9,title:'WPF 4.5 Unleashed',author:'Adam Nathan',publisher:'Pearson Education',pages:864,copies:5},
    {id:10,title:'Beginning Entity Framework Core 5',author:'Eric Vogel',publisher:'Apress',pages:317,copies:7},
  ]
  allBooks = []
  for(const book of books)
    allBooks.push(new Book(book.id,book.title,book.author,book.publisher,book.pages,book.copies))
  localStorage.setItem("books",JSON.stringify(allBooks))
}

let allCards = JSON.parse(localStorage.getItem("cards"))
if(allCards==null){
  let cards = [
    { id: 1, visitorId: 1, bookId: 1,borrowDate: '12.05.2023', returnDate: '30.07.2023' },
    { id: 2, visitorId: 2, bookId: 9,borrowDate: '22.05.2023', returnDate: '' },
    { id: 3, visitorId: 3, bookId: 4,borrowDate: '17.07.2023', returnDate:'',},
    { id: 4, visitorId: 4, bookId: 6,borrowDate: '06.06.2023', returnDate: '03.08.2023' },
    { id: 5, visitorId: 4, bookId: 3,borrowDate: '01.01.2023', returnDate: '12.03.2023' },
    { id: 6, visitorId: 1, bookId: 3,borrowDate: '09.08.2023', returnDate: '12.08.2023' },
    { id: 7, visitorId: 7, bookId: 10,borrowDate: '15.03.2023', returnDate: '16.03.2023' },
    { id: 8, visitorId: 12,bookId: 8,borrowDate: '13.02.2023', returnDate:'',},
    { id: 9, visitorId: 14,bookId: 1,borrowDate: '27.02.2023', returnDate: '' },
    { id: 10,visitorId: 17,bookId: 2,borrowDate: '10.08.2023', returnDate:'',},
  
  ]
  allCards = []
  for(const card of cards)
    allCards.push(new Card(card.id,card.visitorId,card.bookId,card.borrowDate,card.returnDate))
  localStorage.setItem("cards",JSON.stringify(allCards))
}


let menuBar = document.querySelector('.menuBar')
let dataTable = document.querySelector('.dataTable')
let thead = document.querySelector('.thead')
let tbody = document.querySelector('.tbody')
let sortBy = document.querySelector('.sortBy')
let btnSort = document.querySelector('.btnSort')
let searchText = document.querySelector('.searchText')
let btnSearch = document.querySelector('.btnSearch')
let btnAddNew = document.querySelector('.btnAddNew')
let modal = document.querySelector('.modal')
let modalName = document.querySelector('.modal-name') 
let modalForm = document.querySelector('.modal-form')
let btnCloseModal = document.querySelector('.img-close')
let btnSave = document.querySelector('.btnSave')
let statistics = document.querySelector('.statistics')


let selectedWindowClass= JSON.parse(localStorage.getItem("selectedWindow"))
let selectedWindow
if(selectedWindowClass==null){
  selectedWindow = document.querySelector('.menu-Books')
  selectedWindow.style.borderBottom = '4px solid #009296'
  localStorage.setItem("selectedWindow",JSON.stringify(selectedWindow.className))
}
else{
  selectedWindow = document.querySelector('.'+selectedWindowClass)
  selectedWindow.style.borderBottom = '4px solid #009296'
}

for(const menu of menuBar.children){
  menu.addEventListener('click',function(){
    selectedWindowClass = JSON.parse(localStorage.getItem("selectedWindow"))
    selectedWindow = document.querySelector('.'+selectedWindowClass)
    selectedWindow.style.borderBottom = '0'
    menu.style.borderBottom = '4px solid #009296'
    selectedWindow = menu
    localStorage.setItem("selectedWindow",JSON.stringify(selectedWindow.className))
    loadWindow()
  })
}

function loadWindow(){
  thead.innerHTML = ""
  btnAddNew.parentElement.firstElementChild.innerText = ""
  if(selectedWindow.innerText=='Statistics'){
    btnAddNew.parentElement.style.display = 'none'
    sortBy.parentElement.style.display = 'none'
    tbody.innerHTML=""
    statistics.style.display = 'flex'
    showStatistics()    
  }
  else{
    if(btnAddNew.parentElement.style.display=='none')
      btnAddNew.parentElement.style.display = 'inline-block'
    if(sortBy.parentElement.style.display == 'none')
      sortBy.parentElement.style.display = 'flex'
    btnAddNew.parentElement.firstElementChild.innerText = `ALL ${selectedWindow.innerText.toUpperCase()}:`
    btnAddNew.innerText = `New ${selectedWindow.innerText.toLowerCase().slice(0,-1)}`
    modalForm.innerHTML=""
    searchText.value=""
    sortBy.innerHTML=""
    statistics.style.display = 'none'
    let optionId = document.createElement('option')
    optionId.value = optionId.innerText =  'Id'
    sortBy.appendChild(optionId)
    let TR = document.createElement('tr')
    let thId = document.createElement('th')
    thId.innerText = "Id"
    TR.appendChild(thId)
    
    if(selectedWindow.innerText=='Books'){
      let optionTitle = document.createElement('option')
      optionTitle.value = optionTitle.innerText =  'Title'
      let optionAuthor = document.createElement('option')
      optionAuthor.value = optionAuthor.innerText = 'Author'
      let optionCopies = document.createElement('option')
      optionCopies.value = optionCopies.innerText = 'Copies'
      sortBy.append(optionTitle,optionAuthor,optionCopies)

      let inputTitle = document.createElement('input')
      let inputAuthor  = document.createElement('input')
      let inputPublisher = document.createElement('input')
      let inputPages = document.createElement('input')
      let inputCopies = document.createElement('input')
      inputTitle.type = inputAuthor.type = inputPublisher.type = inputCopies.type = inputPages.type = 'text'
      let labelTitle = document.createElement('label')
      labelTitle.innerText = 'Title:'
      let labelAuthor = document.createElement('label')
      labelAuthor.innerText = 'Author:'
      let labelPublisher = document.createElement('label')
      labelPublisher.innerText = 'Publisher:'
      let labelPages = document.createElement('label')
      labelPages.innerText = 'Pages:'
      let labelCopies = document.createElement('label')
      labelCopies.innerText = 'Copies:'
      modalForm.append(labelTitle,inputTitle,labelAuthor,inputAuthor,labelPublisher,inputPublisher,labelPages,inputPages,labelCopies,inputCopies)

      let thTitle = document.createElement('th')
      thTitle.innerText = "Title"
      let thAuthor = document.createElement('th')
      thAuthor.innerText = "Author"
      let thPublisher = document.createElement('th')
      thPublisher.innerText = "Publisher"
      let thPages = document.createElement('th')
      thPages.innerText = "Pages"
      let thCopies = document.createElement('th')
      thCopies.innerText = "Copies"
      let thEdit = document.createElement('th')
      thEdit.innerText = "Edit"
      let thDel = document.createElement('th')
      thDel.innerText = "Del"
      TR.append(thTitle,thAuthor,thPublisher,thPages,thCopies,thEdit,thDel)
      thead.appendChild(TR)
      showBooks(JSON.parse(localStorage.getItem("books")))
    }
    else if(selectedWindow.innerText=='Visitors'){
      let optionName = document.createElement('option')
      optionName.value = optionName.innerText = 'Name'
      sortBy.appendChild(optionName)

      let inputName = document.createElement('input')
      let inputPhone  = document.createElement('input')
      inputName.type = inputPhone.type = 'text'
      let labelName = document.createElement('label')
      labelName.innerText = 'Name:'
      let labelPhone = document.createElement('label')
      labelPhone.innerText = 'Phone:'
      modalForm.append(labelName,inputName,labelPhone,inputPhone)

      let thName = document.createElement('th')
      thName.innerText = "Name"
      let thPhone = document.createElement('th')
      thPhone.innerText = "Phone"
      let thEdit = document.createElement('th')
      thEdit.innerText = "Edit"
      TR.append(thName,thPhone,thEdit)
      thead.appendChild(TR)
      showVisitors(JSON.parse(localStorage.getItem("visitors")))
    }
    else if(selectedWindow.innerText=='Cards'){
      let optionBorrowDate = document.createElement('option')
      optionBorrowDate.value = optionBorrowDate.innerText = 'Borrow Date'
      let optionReturnDate = document.createElement('option')
      optionReturnDate.value = optionReturnDate.innerText = 'Return Date'
      sortBy.append(optionBorrowDate,optionReturnDate)


      let selectVisitor = document.createElement('select')
      for(const visitor of allVisitors){
        let option = document.createElement('option')
        option.value = option.innerText = visitor.name
        selectVisitor.appendChild(option)
      }
      let selectBook  = document.createElement('select')
      selectBook.className='selectBook'
      for(const book of allBooks){
        if(book.copies>0){
          let option = document.createElement('option')
          option.value = option.innerText = book.title
          selectBook.appendChild(option)
        }
      }
      let labelVisitor = document.createElement('label')
      labelVisitor.innerText = 'Visitor:'
      let labelBook = document.createElement('label')
      labelBook.innerText = 'Book:'
      modalForm.append(labelVisitor,selectVisitor,labelBook,selectBook)

      let thVisitor = document.createElement('th')
      thVisitor.innerText = "Visitor"
      let thBook = document.createElement('th')
      thBook.innerText = "Book"
      let thBorrowDate = document.createElement('th')
      thBorrowDate.innerText = "Borrow Date"
      let thReturnDate = document.createElement('th')
      thReturnDate.innerText = "Return Date"
      TR.append(thVisitor,thBook,thBorrowDate,thReturnDate)
      thead.appendChild(TR)
      showCards(JSON.parse(localStorage.getItem("cards")))
    }
  }
  

}

function showBooks(array){
  tbody.innerHTML=""
  for(const book of array){
    let tr = document.createElement('tr')
    let tdId = document.createElement('td')
    tdId.innerText = book.id
    let tdTitle = document.createElement('td')
    tdTitle.innerText = book.title
    let tdAuthor = document.createElement('td')
    tdAuthor.innerText = book.author
    let tdPublisher = document.createElement('td')
    tdPublisher.innerText = book.publisher
    let tdPages = document.createElement('td')
    tdPages.innerText = book.pages
    let tdCopies = document.createElement('td')
    tdCopies.innerText = book.copies
    let tdPen = document.createElement('td')
    let img1 = document.createElement('img')
    img1.src="./pen.webp"
    img1.addEventListener('click',editElement)
    tdPen.appendChild(img1)
    let tdDel = document.createElement('td')
    let img2 = document.createElement('img')
    img2.src="./x.png"
    img2.addEventListener('click',deleteBook)
    tdDel.appendChild(img2)
    tr.appendChild(tdId)
    tr.appendChild(tdTitle)
    tr.appendChild(tdAuthor)
    tr.appendChild(tdPublisher)
    tr.appendChild(tdPages)
    tr.appendChild(tdCopies)
    tr.appendChild(tdPen)
    tr.appendChild(tdDel)
    tbody.appendChild(tr)
  }
}
function showVisitors(array){
  tbody.innerHTML=""
  for(const visitour of array){
    let tr = document.createElement('tr')
    let tdId = document.createElement('td')
    tdId.innerText = visitour.id
    let tdName = document.createElement('td')
    tdName.innerText = visitour.name
    let tdPhone = document.createElement('td')
    tdPhone.innerText = visitour.phone
    let tdPen = document.createElement('td')
    let img = document.createElement('img')
    img.src="./pen.webp"
    img.addEventListener('click',editElement)
    tdPen.appendChild(img)
    tr.appendChild(tdId)
    tr.appendChild(tdName)
    tr.appendChild(tdPhone)
    tr.appendChild(tdPen)
    tbody.appendChild(tr)
  }
}
function showCards(array){
  tbody.innerHTML=""
  for(const card of array){
    let tr = document.createElement('tr')
    let tdId = document.createElement('td')
    tdId.innerText = card.id
    let tdVisitor = document.createElement('td')
    tdVisitor.innerText = allVisitors.find(x=>x.id==card.visitorId).name
    let tdBook = document.createElement('td')
    tdBook.innerText = allBooks.find(x=>x.id==card.bookId).title
    let tdBorrowDate = document.createElement('td')
    tdBorrowDate.innerText = card.borrowDate
    let tdReturnDate = document.createElement('td')
    if(card.returnDate==""){
      let img = document.createElement('img')
      img.src="./back.png"
      img.className='imgReturn'
      img.addEventListener('click',returnBook)
      tdReturnDate.appendChild(img)
    }
    else{
      tdReturnDate.innerText = card.returnDate
    }
    tr.appendChild(tdId)
    tr.appendChild(tdVisitor)
    tr.appendChild(tdBook)
    tr.appendChild(tdBorrowDate)
    tr.appendChild(tdReturnDate)
    tbody.appendChild(tr)
  }
}
function showStatistics(){
  statistics.firstElementChild.innerHTML=""
  statistics.lastElementChild.innerHTML=""
  let booksStatistic = {}
  allCards = JSON.parse(localStorage.getItem("cards"))
  allCards.forEach((x)=>{
    let book = x.bookId
    if(booksStatistic[book])
      booksStatistic[book]++
    else
      booksStatistic[book] = 1})
  let sortedBooksId = Object.keys(booksStatistic).sort((x,y)=>booksStatistic[y] - booksStatistic[x])
  sortedBooksId = sortedBooksId.slice(0,5)

  let visitorsStatistic = {}
  allCards.forEach((x)=>{
    let visitor = x.visitorId
    if(visitorsStatistic[visitor])
    visitorsStatistic[visitor]++
    else
    visitorsStatistic[visitor] = 1})
  let sortedVisitorsId = Object.keys(visitorsStatistic).sort((x,y)=>visitorsStatistic[y] - visitorsStatistic[x])
  sortedVisitorsId = sortedVisitorsId.slice(0,5)

  let h2Books = document.createElement('h2')
  h2Books.innerText = ' The most popular books:'
  statistics.firstElementChild.appendChild(h2Books)
  allBooks = JSON.parse(localStorage.getItem("books"))
  for(let i = 0;i<sortedBooksId.length;i++){
    let div = document.createElement('div')
    div.innerText = `${i+1}: ${allBooks.find(x=>x.id==sortedBooksId[i]).title}`
    statistics.firstElementChild.appendChild(div)
  }
  let h2Visitors = document.createElement('h2')
  h2Visitors.innerText = 'The most active visitors:'
  statistics.lastElementChild.appendChild(h2Visitors)
  allVisitors = JSON.parse(localStorage.getItem("visitors"))
  for(let i = 0;i<sortedVisitorsId.length;i++){
    let div = document.createElement('div')
    div.innerText = `${i+1}: ${allVisitors.find(x=>x.id==sortedVisitorsId[i]).name}`
    statistics.lastElementChild.appendChild(div)
  }
}
let idEditedItem
function editElement(e){  

  let tr = e.target.parentElement.parentElement
  let itemId = tr.firstElementChild.innerText
  if(selectedWindow.innerText=='Books'){
    allBooks = JSON.parse(localStorage.getItem("books"))
    let index = allBooks.indexOf(allBooks.find(x=>x.id==itemId))
    let children = modalForm.children
    children[1].value = allBooks[index].title
    children[3].value = allBooks[index].author
    children[5].value = allBooks[index].publisher
    children[7].value = allBooks[index].pages
    children[9].value = allBooks[index].copies
  }
  else if(selectedWindow.innerHTML=='Visitors'){
    allVisitors = JSON.parse(localStorage.getItem("visitors"))
    let index = allVisitors.indexOf(allVisitors.find(x=>x.id==itemId))
    let children = modalForm.children
    children[1].value = allVisitors[index].name
    children[3].value = allVisitors[index].phone
  }
  modal.style.display = 'block'
  modalName.innerText = `Edit ${selectedWindow.innerText.toLowerCase().slice(0,-1)}:`
  idEditedItem = itemId
}

function deleteBook(e){
  let tr = e.target.parentElement.parentElement
  let deleteBookId = tr.firstElementChild.innerText
  if(allCards.find(x=>x.bookId==deleteBookId)?1:-1==1){
    alert('You cannot delete a book until all books with that title have been returned')
    return
  }
  allBooks = JSON.parse(localStorage.getItem("books"))
  allBooks = allBooks.filter(x=>x.id!=deleteBookId)
  localStorage.setItem("books",JSON.stringify(allBooks))
  tr.remove()
}

function returnBook(e){
  let tr = e.target.parentElement.parentElement
  let cardId = tr.firstElementChild.innerText
  allCards = JSON.parse(localStorage.getItem("cards"))
  let index =allCards.indexOf(allCards.find(x=>x.id==cardId))
  let today = new Date()
  let dd = today.getDate()
  let mm = today.getMonth() + 1
  let yyyy = today.getFullYear()
  if (dd < 10) 
    dd = '0' + dd
  if (mm < 10) 
    mm = '0' + mm
  today = dd + '.' + mm + '.' + yyyy
  allCards[index].returnDate = today
  allBooks = JSON.parse(localStorage.getItem("books"))
  let bookIndex =allBooks.indexOf(allBooks.find(x=>x.id==allCards[index].bookId))
  allBooks[bookIndex].copies+=1
  localStorage.setItem("cards",JSON.stringify(allCards))
  localStorage.setItem("books",JSON.stringify(allBooks))
  tr.lastElementChild.innerText = today
  e.target.remove()
}

function parseDate(date){
  var parts = date.split('.')
  return new Date(parts[2],parts[1]-1,parts[0])
}

function sort(){
  let key = sortBy.value
  switch(selectedWindow.innerHTML)
  {
    case 'Books':
      allBooks = JSON.parse(localStorage.getItem("books"))
      if(key=="Id")
        allBooks.sort(function(a,b){return a.id-b.id})
      else if(key=="Title"){
        allBooks.sort(function(a,b){
        let x = a.title.toLowerCase()
        let y = b.title.toLowerCase()
        return x>y?1:-1})}
      else if(key=="Author"){
        allBooks.sort(function(a,b){
        let x = a.author.toLowerCase()
        let y = b.author.toLowerCase()
        return x>y?1:-1})}
      if(key=="Copies")
        allBooks.sort(function(a,b){return b.copies-a.copies})
      showBooks(allBooks)
      break

    case 'Visitors':
      allVisitors = JSON.parse(localStorage.getItem("visitors"))
      if(key=="Id")
        allVisitors.sort(function(a,b){return a.id-b.id})
      else if(key=="Name"){
        allVisitors.sort(function(a,b){
        let x = a.name.toLowerCase()
        let y = b.name.toLowerCase()
        return x>y?1:-1})}
      showVisitors(allVisitors)
      break
    
    case 'Cards':
      allCards = JSON.parse(localStorage.getItem("cards"))
      if(key=="Id")
        allCards.sort(function(a,b){return a.id-b.id})
      else if(key=="Borrow Date"){
        allCards.sort(function(a,b){
        let x = parseDate(a.borrowDate)
        let y = parseDate(b.borrowDate)  
        return x-y})}
      else if(key=="Return Date"){
        allCards.sort(function(a,b){
          if(a.returnDate=="")
            return -1
          if(b.returnDate=="")
            return 1
        let x = parseDate(a.returnDate)
        let y = parseDate(b.returnDate)  
        return y-x})}
      showCards(allCards)
      break
  }
}
function search(){
  let array = []
  switch(selectedWindow.innerText)
  {
    case 'Books':
      allBooks = JSON.parse(localStorage.getItem("books"))
      array = allBooks.filter(x=>x.title.includes(searchText.value)||x.author.includes(searchText.value)||x.publisher.includes(searchText.value))
      showBooks(array)
      break
    case 'Visitors':
      allVisitors = JSON.parse(localStorage.getItem("visitors"))
      array = allVisitors.filter(x=>x.name.includes(searchText.value)||x.phone.includes(searchText.value))
      showVisitors(array)
      break
    case 'Cards':
      allCards = JSON.parse(localStorage.getItem("cards"))
      array = allCards.filter(x=>allBooks.find(b=>b.id==x.bookId).title.includes(searchText.value)||x.borrowDate.includes(searchText.value))
      showCards(array)
      break
  }
}
function addNew(){
  modal.style.display = 'block'
  modalName.innerText = `New ${selectedWindow.innerText.toLowerCase().slice(0,-1)}:`
}
function saveChanges(){
  for(const child of modalForm.children){
    if(child.tagName=='INPUT'){
      if(child.value==""){
        alert("All fields are required")
        return
      }
    }
  }
  let children = modalForm.children
  if(selectedWindow.innerText=='Books'){
    if(!children[7].value.match(/^0*?[1-9]\d*$/)||!children[9].value.match(/^0*?[1-9]\d*$/)){
      alert("You can input only positiv numbers")
      return
    }
    if(modalName.innerText.includes('New')){
      allBooks = JSON.parse(localStorage.getItem("books"))
      allBooks.push(new Book(
        Math.max(...allBooks.map(x=>{return x.id}))+1,
        children[1].value,
        children[3].value,
        children[5].value,
        children[7].value,
        children[9].value))
      localStorage.setItem("books",JSON.stringify(allBooks))
      showBooks(allBooks)
    }
    else if(modalName.innerText.includes('Edit')){
      allBooks = JSON.parse(localStorage.getItem("books"))
      let index = allBooks.indexOf(allBooks.find(x=>x.id==idEditedItem))
      allBooks[index].title=children[1].value
      allBooks[index].author=children[3].value
      allBooks[index].publisher=children[5].value
      allBooks[index].pages=children[7].value
      allBooks[index].copies=children[9].value
      for(const tr of tbody.children)
      {
        if(tr.firstElementChild.innerText==idEditedItem){
          tr.childNodes[1].innerText=allBooks[index].title
          tr.childNodes[2].innerText=allBooks[index].author
          tr.childNodes[3].innerText=allBooks[index].publisher
          tr.childNodes[4].innerText=allBooks[index].pages
          tr.childNodes[5].innerText=allBooks[index].copies
          break
        }
      }
      localStorage.setItem("books",JSON.stringify(allBooks))
    }
  }
  else if(selectedWindow.innerText=='Visitors'){
    if(!children[3].value.match(/([0-9]{3})([ .-]?)([0-9]{3})([ .-]?)([0-9]{4})/)){
      alert("You can use only numbers, space and dash.")
      return
    }
    if(modalName.innerText.includes('New')){
      allVisitors = JSON.parse(localStorage.getItem("visitors"))
      allVisitors.push(new Visitor(
        Math.max(...allVisitors.map(x=>{return x.id}))+1,
        children[1].value,
        children[3].value))
      localStorage.setItem("visitors",JSON.stringify(allVisitors))
      showVisitors(allVisitors)
    }
    else if(modalName.innerText.includes('Edit')){
      allVisitors = JSON.parse(localStorage.getItem("visitors"))
      let index = allVisitors.indexOf(allVisitors.find(x=>x.id==idEditedItem))
      allVisitors[index].name=children[1].value
      allVisitors[index].phone=children[3].value
      for(const tr of tbody.children)
      {
        if(tr.firstElementChild.innerText==idEditedItem){
          tr.childNodes[1].innerText=allVisitors[index].name
          tr.childNodes[2].innerText=allVisitors[index].phone
          break
        }
      }
      localStorage.setItem("visitors",JSON.stringify(allVisitors))
    }
  }
  else if(selectedWindow.innerText=='Cards'){
    allBooks = JSON.parse(localStorage.getItem("books"))
    allCards = JSON.parse(localStorage.getItem("cards"))
    let cardBook = allBooks.find(x=>x.title==children[3].value)
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth() + 1
    let yyyy = today.getFullYear()
    if (dd < 10) 
      dd = '0' + dd
    if (mm < 10) 
      mm = '0' + mm
    today = dd + '.' + mm + '.' + yyyy
    allCards.push(new Card(
      Math.max(...allCards.map(x=>{return x.id}))+1,
      allVisitors.find(x=>x.name==children[1].value).id,
      cardBook.id,
      today,
      ""))
    let index = allBooks.indexOf(cardBook)
    allBooks[index].copies-=1
    if(allBooks[index].copies==0){
      let selectBook = document.querySelector('.selectBook')
      for(const option of selectBook){
        if(option.innerText==allBooks[index].title){
          option.remove()
          break
        }
      }
    }
    localStorage.setItem("books",JSON.stringify(allBooks))
    localStorage.setItem("cards",JSON.stringify(allCards))
    showCards(allCards)
  }
  closeModalWindow()
}
function closeModalWindow(){
  for(const child of modalForm.children)
    if(child.tagName=='INPUT')
      child.value = ""
  modal.style.display = 'none'
}
btnSort.addEventListener('click',sort)
btnSearch.addEventListener('click',search)
btnAddNew.addEventListener('click',addNew)
btnSave.addEventListener('click',saveChanges)
btnCloseModal.addEventListener('click',closeModalWindow)
loadWindow()