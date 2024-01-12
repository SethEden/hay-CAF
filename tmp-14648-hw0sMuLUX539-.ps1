
          Set-Location "C:/CAFfeinated"
          $process = testcafe firefox C:/CAFfeinated/TestBureau/SethEden/Tests/Default.test.js  --reporter html:C:/CAFfeinated/results/SethEden/reports/20240111-203728-995.html testName=Software
          while (!$process.HasExited) {
              $output = $process.StandardOutput.ReadLine()
              if ($output -ne $null) {
                  Write-Host $output
              }
          }
          while (!$process.StandardOutput.EndOfStream) {
              $output = $process.StandardOutput.ReadLine()
              Write-Host $output
          }