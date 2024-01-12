
        Set-Location "C:/CAFfeinated"
        $result = testcafe firefox C:/CAFfeinated/TestBureau/SethEden/Tests/Default.test.js  --reporter html:C:/CAFfeinated/results/SethEden/reports/20240111-202602-429.html testName=Software
        Write-Host $result