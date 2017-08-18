app.controller('MainController', ['$scope', function($scope) {
    $scope.experience = [
        {
            company: 'Belcan Engineering',
            img: '',
            position: 'Software Engineering Intern',
            info1: 'Developed tools to monitor Pratt & Whitney Jet Engines',
            info2: 'WPF, C#, XAML, SQL'
        },
        {
            company: 'Software Logistics, LLC',
            img: '', 
            position: 'Web Developer Intern',
            info1: 'Developed portions of NuvIoT',
            info2: 'HTML, CSS, AngularJS, ASP.NET'
        },
        {
            company: 'Fusion Advertising Inc.',
            img: 'images/Fusion_Logo.png',
            position: 'Lead Mobile Application Developer Intern',
            info1: 'Developed The Frugal You coupon application',
            info2: 'C#, XAML, Xamarin.Forms, .NET'
        },
        {
            company: 'StarkNetwork',
            img: 'images/StarkNetwork_Logo2.jpg',
            position: 'Web and App Developer',
            info1: 'Developed webpages for various customers',
            info2: 'C#, XAML, HTML, CSS'
        },
        {
            company: 'Tier-Zero',
            img: 'images/tier-zero-nobg.png',
            position: 'Lead Web and App Developer',
            info1: 'Developed UWP apps for Windows 10',
            info2: 'C#, XAML, Xamarin.Forms, HTML, CSS, Bootstrap'
        }
    ];

    $scope.projects = [
        {
            img: 'images/Project_4.jpg',
            name: 'EvenToConnect',
            created: 'Created By: Cameron Stark, Brian Nunes De Souza, Nicholas Van Bommel and Pablo Garces',
            comment1: 'Developed using C#.NET, HTML, Bootstrap, and CSS',
            comment2: 'Visual Studio 2015 and Clarifai API'
        },
        {
            img: 'images/Project_5.jpg',
            name: 'HackRiddle App',
            created: 'Created By: Embry-Riddle Mobile Application Development Club',
            comment1: 'Developed using HTML, CSS and Materialize',
            comment2: 'Twitter API and GitHub'
        }
    ];

   
}]);