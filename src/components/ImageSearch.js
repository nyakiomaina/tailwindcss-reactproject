import { render } from "@testing-library/react";
import React, { component } from "react";

 class ImageSearch extends Component {
     state = {text: ""}

  setText = (event) => {
      this.setState({text: event.target.value})
  }

  onSubmit = (event) => {
      event.preventDefault();
      searchText(text);
  }
render() { 
    return (
        <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
            <form onSubmit={this.onSubmit}//{onSubmit}
            className="w-full max-w-sm">
                <div className="flex items-center border-b-2 border-teal-500 py-2">
                    <input onChange={this.setText}//{e => setText(e.target.value)} 
                    className="appearance-none bg-transparent border-none w-full text-blck-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text" placeholder="search image Term..." />
                    <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500
                    text-sm border-4 text-black py-1 px-2 rounded" type="submit">
                search
                    </button>
                </div>
            </form>
        </div>
    )
}
 }

export default ImageSearch;