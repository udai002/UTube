export  const Signin = ()=><div className="flex justify-center items-center h-screen w-full">
    <div className="p-20 bg-secondary-hover">
        <form>
            <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
            </div>
            <div className="flex flex-col items-start">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <input type="checkbox"   /><span>show password</span>
            </div>
        </form>
    </div>
</div>