const getUsers = () => {
    let arr = []
    document.querySelectorAll("._aacl._aaco._aacw._aacx._aad7._aade").forEach(ele => {
        following.push(ele.innerText)
    })
    
    return arr
}


const getWasteFollowing = (following, followers) => {
    let wasteFollowing = []
    following.forEach(follow => {
        
        let isAFollower = false
        
        followers.forEach(follower => {
            if (follow == follower) {
                isAFollower  = true 
            }
        })

        if (!isAFollower) {

            wasteFollowing.push(follow)
        }
        
    })

    return wasteFollowing
    
}

///////////////////////

let followers = getUsers()

let following = getUsers()


getWasteFollowing(following, followers)


