export default function QuizHeader({ 
  userName = "Maureen", 
  avatarUrl = "/placeholder-avatar.png" 
}) {

  return (
    <header className="w-full flex justify-between items-center px-6 py-4 ">
      
      <div className="flex items-center">
      
        <img 
          className="h-auto" 
          width="120" 
          height="45" 
          src="/logo.svg" 
          alt="mind flow logo" 
        />
      </div>
      
      <div className="flex items-center gap-3"> 
        <div className="flex flex-col text-right text-base font-medium">
          <p className="text-[#27D89D] leading-none">Hello,</p>
          <span className="text-[#A3C0BD] text-xl leading-none">{userName}</span>
        </div>
        
       
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#A3C0BD]">
  
          <img 
            src={avatarUrl} 
            alt={`Avatar de ${userName}`} 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>
    </header>
  );
}