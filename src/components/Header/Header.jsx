import profile from './../../assets/images/profile.png';

const Header = () => {
    return (
        <header className="container mx-auto">
            <div className='flex justify-between p-5 items-center bg-slate-50'>
                <div>
                    <h1 className="sm:text-4xl md:text-4xl font-semibold"> Knowledge Cafe</h1>
                </div>
                <div>
                    <img src={profile} alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;