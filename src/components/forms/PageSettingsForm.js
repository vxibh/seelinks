export default function PageSettingsForm({page}){
    return (
        <div className="-m-4">
            <form>
                <div className="bg-gray-300 h-32">
                    <label>
                        <input type="radio" name="bgType" value='color' />
                        <span>Color</span>
                    </label>
                    <label>
                        <input type="radio" name="bgType" value='image' />
                        <span>Image</span>
                    </label>
                </div>
                <div className="">
                    avatar
                </div>
            </form>
        </div>
    )
}